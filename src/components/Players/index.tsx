import { Input, Space, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

import { playersDataMok } from './constants';
import { Player } from './types';

const { Search } = Input;
const { Title } = Typography;

export const Players: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = playersDataMok.filter((player) =>
    player.nickname.toLowerCase().includes(searchText.toLowerCase()),
  );

  const columns: ColumnsType<Player> = [
    {
      title: 'Игрок',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: 'Имя',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Команда',
      dataIndex: 'team',
      key: 'team',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Search
          placeholder="Поиск игроков"
          allowClear
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 300 }}
        />

        <Title level={4}>Игроки</Title>
        <Table columns={columns} dataSource={filteredData} bordered pagination={false} />
      </Space>
    </div>
  );
};
