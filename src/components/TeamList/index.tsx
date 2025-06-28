import { Card, List, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { teamsDataMok } from '../../constants';

const { Title } = Typography;

export const TeamList = () => {
  const navigate = useNavigate();

  const handleTeamClick = (teamId: number) => {
    navigate(`/teams/${teamId}`);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Список команд</Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        dataSource={teamsDataMok}
        renderItem={(team) => (
          <List.Item>
            <Card hoverable onClick={() => handleTeamClick(team.id)} style={{ width: '100%' }}>
              <Card.Meta title={team.name} description="No Logo" />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
