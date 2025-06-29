import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

import { generateMockData } from './constants';
import { TeamRating } from './types';

const { Title } = Typography;

export const Rating: React.FC = () => {
  const ratingData = generateMockData();
  const lastTournamentName = 'Чемпионат Мира 2024';

  const columns: ColumnsType<TeamRating> = [
    {
      title: 'Команда',
      dataIndex: 'team',
      key: 'team',
    },
    {
      title: 'Рейтинг до турнира',
      dataIndex: 'preRating',
      key: 'preRating',
    },
    {
      title: 'Рейтинг после турнира',
      dataIndex: 'postRating',
      key: 'postRating',
    },
  ];

  return (
    <>
      <Title level={4}>Рейтинг после турнира: {lastTournamentName}</Title>

      <Table columns={columns} dataSource={ratingData} pagination={false} bordered />
    </>
  );
};
