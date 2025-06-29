import { Divider, Table, Typography } from 'antd';
import React from 'react';

import { TournamentMok } from '../../../TournamentsTable/types';

export const TournamentInfoDetails: React.FC<{ tournament: TournamentMok }> = ({ tournament }) => {
  const infoColumns = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Количество игроков',
      dataIndex: 'countPlayers',
      key: 'countPlayers',
    },
  ];

  return (
    <>
      <Typography.Title level={5}>Команды</Typography.Title>
      <div style={{ padding: '24px', border: '1px solid #0505050f' }}>
        <Typography.Text strong>{tournament.team.join(', ')}</Typography.Text>
      </div>

      <Divider />
      <Table
        columns={infoColumns}
        dataSource={tournament.playersByCountry}
        pagination={false}
        style={{ border: 'none' }}
      />
    </>
  );
};
