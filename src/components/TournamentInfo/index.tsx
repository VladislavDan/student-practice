import { Card, Tabs, TabsProps, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { tournamentsDataMok } from '../TournamentsTable/constants';
import { TournamentMok } from '../TournamentsTable/types';
import { TournamentInfoDetails } from './components/TournamentInfoDetails';
import { TournamentResult } from './components/TournamentResult';

export const TournamentInfo = () => {
  const { id } = useParams<{ id: string }>();

  const [activeTab, setActiveTab] = useState('info');
  const [currentTournament, setCurrentTournament] = useState<TournamentMok | null>(null);

  useEffect(() => {
    if (id) {
      const foundTournament = tournamentsDataMok.find(
        (tournament) => tournament.id === parseInt(id),
      );
      setCurrentTournament(foundTournament || null);
    }
  }, [id]);

  if (!currentTournament) {
    return <div style={{ padding: '24px' }}>Турнир не найден</div>;
  }

  const tabItems: TabsProps['items'] = [
    {
      key: 'info',
      label: 'Информация',
      children: <TournamentInfoDetails tournament={currentTournament} />,
    },
    {
      key: 'results',
      label: 'Результаты',
      children: <TournamentResult tournament={currentTournament} />,
    },
  ];

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div>
            {currentTournament.logo ? (
              <img src={currentTournament.logo} alt="Team Logo" style={{ width: 40, height: 40 }} />
            ) : (
              <Typography.Text type="secondary">No Logo</Typography.Text>
            )}
          </div>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {currentTournament.name}
          </Typography.Title>
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
