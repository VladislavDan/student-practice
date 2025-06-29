import { Table, Typography } from 'antd';
import React from 'react';

import { TournamentMok } from '../../../TournamentsTable/types';

export const TournamentResult: React.FC<{ tournament: TournamentMok }> = ({ tournament }) => {
  const resultColumns = [
    {
      title: 'Имя команды',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Место',
      dataIndex: 'place',
      key: 'place',
    },
  ];

  return (
    <>
      <Typography.Title level={4}>Результаты турнира</Typography.Title>
      <Table
        columns={resultColumns}
        dataSource={tournament.resultTeam}
        pagination={false}
        style={{ border: 'none' }}
      />
    </>
  );
};
