import 'dayjs/locale/ru'; // для локализации (опционально)

import type { DatePickerProps } from 'antd';
import { Card, DatePicker, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import { Revenue, TeamMok } from '../../../../types';

export const TeamFinance: React.FC<{ team: TeamMok }> = ({ team }) => {
  const [selectedYear, setSelectedYear] = useState<dayjs.Dayjs | null>(null);
  const [currentRevenue, setCurrentRevenue] = useState<Revenue | null>(null);
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  useEffect(() => {
    if (team.revenues?.length > 0) {
      const years = team.revenues.map((r) => r.year).sort((a, b) => b - a);
      setAvailableYears(years);
    }
  }, [team]);

  const updateCurrentRevenue = (year: number) => {
    const revenue = team.revenues.find((r) => r.year === year);
    setCurrentRevenue(revenue || null);
  };

  const handleYearChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setSelectedYear(date);
      updateCurrentRevenue(date.year());
    } else {
      setSelectedYear(null);
      setCurrentRevenue(null);
    }
  };

  const disabledDate = (current: dayjs.Dayjs) => {
    return !availableYears.includes(current.year());
  };

  return (
    <Card title="Доход команды за год" style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <DatePicker
          picker="year"
          value={selectedYear}
          onChange={handleYearChange}
          disabledDate={disabledDate}
          style={{ width: 140 }}
          placeholder="Выберите год"
          allowClear={false}
        />

        <Typography.Text strong>
          {`Доход за ${selectedYear?.year() ?? 0} год: `}
          <Typography.Text strong>{`$${(
            currentRevenue?.amount ?? 0
          ).toLocaleString()}`}</Typography.Text>
        </Typography.Text>
      </div>
    </Card>
  );
};
