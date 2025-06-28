import { Table, Typography } from 'antd';

import { TeamMok } from '../../../../types';

const matchesColumns = [
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  { title: 'Соперник', dataIndex: 'opponent', key: 'opponent' },
  {
    title: 'Результат',
    dataIndex: 'result',
    key: 'result',
    render: (text?: string) => text ?? '-',
  },
];

export const TeamMatches: React.FC<{ team: TeamMok }> = ({ team }) => {
  //TODO: на видео какая бага, надо уточнить какие поля внутри поставила отрицание для бага currentTeam?.matches?.length
  return !team?.matches?.length ? (
    <Table
      columns={matchesColumns}
      dataSource={team.matches}
      pagination={false}
      style={{ border: 'none' }}
    />
  ) : (
    <Typography.Text type="secondary">;</Typography.Text>
  );
};
