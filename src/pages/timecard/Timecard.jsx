import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

import BackLink from '../../components/common/form/navigation/backlink/BackLink';
import AddTimePeriod from '../../components/timecard/add-time-period/AddTimePeriod';
import ErrorSummary from '../../components/common/form/error-summary/ErrorSummary';

const Timecard = () => {
  const { date } = useParams();
  const previousDay = dayjs(date).subtract(1, 'day').format('YYYY-MM-DD');
  const nextDay = dayjs(date).add(1, 'day').format('YYYY-MM-DD');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onSubmit',
  });

  return (
    <>
      <BackLink text="Back to calendar" link="/calendar" />
      {errors && Object.keys(errors).length !== 0 && (
        <ErrorSummary errors={errors} />
      )}
      <h1 className="govuk-caption-m">My Timecard</h1>
      <h1 className="govuk-heading-m">{dayjs(date).format('DD MMMM YYYY')}</h1>
      <div className="govuk-button-group">
        <Link
          className="govuk-link govuk-link--no-visited-state"
          to={`/timecard/${previousDay}`}
        >
          Previous day
        </Link>
        <Link
          className="govuk-link govuk-link--no-visited-state"
          to={`/timecard/${nextDay}`}
        >
          Next day
        </Link>
        <Link
          className="govuk-link govuk-link--no-visited-state"
          to="/calendar"
        >
          Select another date
        </Link>
      </div>

      <AddTimePeriod
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default Timecard;
