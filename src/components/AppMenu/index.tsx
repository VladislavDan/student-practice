import {
  FileOutlined,
  HomeOutlined,
  LineChartOutlined,
  TeamOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router';

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
};

export const AppMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs: MenuItem[] = [
    { key: 'main', icon: <HomeOutlined />, label: 'Главная' },
    { key: 'teams', icon: <TeamOutlined />, label: 'Команды' },
    { key: 'tournaments', icon: <TrophyOutlined />, label: 'Турниры' },
    { key: 'players', icon: <FileOutlined />, label: 'Игроки' },
    { key: 'rating', icon: <LineChartOutlined />, label: 'Расчет рейтинга' },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemBg: '#462b4c',
            darkItemSelectedBg: '#5a3a61',
            darkItemHoverBg: '#5a3a61',
            darkSubMenuItemBg: '#3a2240',
            itemColor: '#ffffff',
            itemHoverColor: '#ffffff',
          },
        },
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname.split('/')[1] || 'main']}
        onClick={({ key }) => navigate(`/${key}`)}
        items={tabs}
      />
    </ConfigProvider>
  );
};
