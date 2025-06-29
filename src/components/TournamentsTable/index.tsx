import { Button, Modal, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { statusMap, tournamentsDataMok } from './constants';
import { Prize, TournamentMok, TournamentStatus } from './types';

export const TournamentsTable: React.FC = () => {
  const [isPrizeModalOpen, setIsPrizeModalOpen] = useState(false);
  const [currentPrizes, setCurrentPrizes] = useState<Prize[]>([]);
  const navigate = useNavigate();

  const showPrizes = (tournamentId: number) => {
    const tournament = tournamentsDataMok.find((t) => t.id === tournamentId);
    if (tournament) {
      setCurrentPrizes(
        tournament.prizes.map((prize, index) => ({
          place: index + 1,
          prize: prize,
        })),
      );

      setIsPrizeModalOpen(true);
    }
  };

  const handleDetails = (tournamentId: number) => {
    navigate(`/tournaments/${tournamentId}`);
  };

  const columns: ColumnsType<TournamentMok> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Организатор',
      dataIndex: 'organizer',
      key: 'organizer',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status: TournamentStatus) => {
        const statusInfo = statusMap[status];
        return <Tag color={statusInfo.color}>{statusInfo.text}</Tag>;
      },
    },
    {
      title: 'Призы',
      key: 'prizes',
      render: (_, record) => <Button onClick={() => showPrizes(record.id)}>Призы</Button>,
    },
    {
      title: 'Подробнее',
      key: 'details',
      render: (_, record) => (
        <Button type="link" onClick={() => handleDetails(record.id)}>
          Информация
        </Button>
      ),
    },
  ];

  const prizeColumns: ColumnsType<Prize> = [
    {
      title: 'Место',
      dataIndex: 'place',
      key: 'place',
      align: 'center',
      render: (place) => <Typography.Text>{place}</Typography.Text>,
    },
    {
      title: 'Приз',
      dataIndex: 'prize',
      key: 'prize',
      render: (prize) => <Typography.Text>{prize}</Typography.Text>,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={tournamentsDataMok} rowKey="id" pagination={false} />

      <Modal
        title="Таблица призов"
        open={isPrizeModalOpen}
        onCancel={() => setIsPrizeModalOpen(false)}
        footer={null}
      >
        <Table
          columns={prizeColumns}
          dataSource={currentPrizes}
          pagination={false}
          rowKey="place"
          bordered
        />
      </Modal>
    </>
  );
};
