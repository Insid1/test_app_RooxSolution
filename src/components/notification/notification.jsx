import PropTypes from 'prop-types';

function Notification({ isError }) {
  if (isError) {
    return (

      <p style={{
        color: 'red',
      }}
      >
        Ошибка отправки данных
      </p>
    );
  }

  return (
    <p style={{
      color: 'green',
    }}
    >
      Данные успешно отправлены
    </p>
  );
}

Notification.propTypes = {
  isError: PropTypes.bool.isRequired,
};

export default Notification;
