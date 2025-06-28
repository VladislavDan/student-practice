import { Divider, Table, Typography } from 'antd';

import { TeamMok } from '../../../../types';

const infoColumns = [
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
];

export const TeamInfo: React.FC<{ team: TeamMok }> = ({ team }) => {
  return (
    <>
      <Typography.Title level={4}>Состав</Typography.Title>
      <Divider />
      <Table
        columns={infoColumns}
        dataSource={team.players}
        pagination={false}
        style={{ border: 'none' }}
      />
    </>
  );
};
