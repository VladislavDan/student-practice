import { Layout, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Route, Routes } from 'react-router';

import { MainPage } from '../../pages/main';
import { PlayersPage } from '../../pages/players';
import { RatingPage } from '../../pages/rating';
import { TeamPage } from '../../pages/team';
import { TournamentInfoPage } from '../../pages/tournamentInfo';
import { TournamentsPage } from '../../pages/tournaments';
import { AppMenu } from '../AppMenu';

export const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} style={{ background: '#462b4c' }}>
        <div style={{ padding: '24px', color: '#ffffff' }}>
          <Typography.Title level={4} style={{ color: '#ffffff', margin: 0 }}>
            CyberSportsPortal
          </Typography.Title>
        </div>
        <AppMenu />
      </Sider>
      <Layout>
        <Layout.Content>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="tournaments" element={<TournamentsPage />} />
            <Route path="tournaments/:id" element={<TournamentInfoPage />} />
            <Route path="players" element={<PlayersPage />} />
            <Route path="rating" element={<RatingPage />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
