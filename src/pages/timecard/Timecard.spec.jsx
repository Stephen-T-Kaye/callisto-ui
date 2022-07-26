import { screen } from '@testing-library/react';
import { renderWithTimecardContext } from '../../test/helpers/TimecardContext';

import { TimecardPage } from './Timecard';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    date: '2022-07-01',
  }),
  useNavigate: () => mockNavigate,
}));

describe('Timecard', () => {
  it('should render a timecard component with the correct date', () => {
    renderWithTimecardContext(<TimecardPage />);

    const date = screen.getByText('01 July 2022');
    expect(date).toBeTruthy();
  });

  it('should render the SelectTimecardPeriodType component when no time entries have been added', () => {
    renderWithTimecardContext(<TimecardPage />);

    const heading = screen.getByText('Add a new time period');
    expect(heading).toBeTruthy();
  });

  it('should render the EditShiftTimecard component when time period type exists', async () => {
    renderWithTimecardContext(<TimecardPage />, {
      summaryErrors: {},
      setSummaryErrors: jest.fn(),
      timecardData: {
        timePeriodType: 'Shift',
        startTime: '',
        finishTime: '',
      },
      setTimecardData: jest.fn(),
    });

    expect(screen.queryByText('Add a new time period')).toBeFalsy();
    expect(screen.getByText('Start time')).toBeTruthy();
    expect(screen.getByText('Finish time')).toBeTruthy();
  });

  describe('navigation', () => {
    it('should contain a link to previous day', () => {
      renderWithTimecardContext(<TimecardPage />);

      const previousDayLink = screen.getByText('Previous day');
      expect(previousDayLink.pathname).toBe('/timecard/2022-06-30');
    });

    it('should contain a link to next day', () => {
      renderWithTimecardContext(<TimecardPage />);

      const nextDayLink = screen.getByText('Next day');
      expect(nextDayLink.pathname).toBe('/timecard/2022-07-02');
    });

    it('should contain a link to the calendar', () => {
      renderWithTimecardContext(<TimecardPage />);

      const calendarLink = screen.getByText('Select another date');
      expect(calendarLink.pathname).toBe('/calendar');
    });
  });
});
