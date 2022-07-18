import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
import { TimecardContext } from '../../../pages/timecard/Timecard';

import SelectTimecardPeriodType from './SelectTimecardPeriodType';

const mockRegister = jest.fn();
const handleSubmit = jest.fn();
const errors = {};

describe('SelectTimecardPeriodType', () => {
  it('should render a radios component with the correct time periods', () => {
    const timePeriods = [
      'Shift',
      'Scheduled rest day',
      'Non-working day',
      'On call',
      'Absence',
      'Training',
      'Overtime',
    ];

    render(
      <TimecardContext.Provider
        value={{ summaryErrors: {}, setSummaryErrors: jest.fn() }}
      >
        <SelectTimecardPeriodType
          register={mockRegister}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </TimecardContext.Provider>,
      {
        wrapper: MemoryRouter,
      }
    );

    timePeriods.map((option) => {
      expect(screen.getByText(option)).toBeTruthy();
    });
  });

  it('should display an error message and error summary box when pressing submit with nothing selected', async () => {
    render(
      <TimecardContext.Provider
        value={{ summaryErrors: {}, setSummaryErrors: jest.fn() }}
      >
        <SelectTimecardPeriodType />
      </TimecardContext.Provider>,
      { wrapper: MemoryRouter }
    );

    act(() => {
      const continueButton = screen.getByText('Continue');
      fireEvent.click(continueButton);
    });

    await waitFor(() => {
      const errorMessage = screen.getByText('You must select a time period');
      expect(errorMessage).toBeTruthy();
    });
  });
});
