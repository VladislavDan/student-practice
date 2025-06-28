import type { TabsProps } from 'antd';
import { Card, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { teamsDataMok } from '../../constants';
import { TeamMok } from '../../types';
import { TeamFinance } from './components/TeamFinance';
import { TeamInfo } from './components/TeamInfo';
import { TeamMatches } from './components/TeamMatches';

const { Title, Text } = Typography;

export const TeamCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('info');
  const [currentTeam, setCurrentTeam] = useState<TeamMok | null>(null);

  useEffect(() => {
    if (id) {
      const foundTeam = teamsDataMok.find((team) => team.id === parseInt(id));
      setCurrentTeam(foundTeam || null);
    }
  }, [id]);

  if (!currentTeam) {
    return <div style={{ padding: '24px' }}>Команда не найдена</div>;
  }

  const tabItems: TabsProps['items'] = [
    {
      key: 'info',
      label: 'Информация',
      children: <TeamInfo team={currentTeam} />,
    },
    {
      key: 'results',
      label: 'Результаты',
      children: <TeamFinance team={currentTeam} />,
    },

    {
      key: 'matches',
      label: 'Матчи',
      children: <TeamMatches team={currentTeam} />,
    },
  ];

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div>
            {currentTeam.logo ? (
              <img src={currentTeam.logo} alt="Team Logo" style={{ width: 40, height: 40 }} />
            ) : (
              <Text type="secondary">No Logo</Text>
            )}
          </div>
          <Title level={4} style={{ margin: 0 }}>
            {currentTeam.name}
          </Title>
        </div>
      }
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.09)', border: 'none' }}
    >
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={tabItems}
        tabBarStyle={{ marginBottom: 24 }}
      />
    </Card>
  );
};
