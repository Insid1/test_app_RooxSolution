interface NotificationProps {
  isError: boolean
}

function Alert({ isError }: NotificationProps) {
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

export default Alert;
