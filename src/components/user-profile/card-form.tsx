import Alert from 'components/alert/alert';
import { useForm } from 'react-hook-form';
import {
  selectIsFetching, selectIsUserDataSend,
  selectLoadingError, selectShowNotification, selectUserById,
} from 'store/data/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setCurrentUserId } from 'store/interface/interface-slice';
import { selectCurrentUserId, selectIsFormActive } from 'store/interface/selectors';
import CardFormItem from './card-form-item';
import styles from './card-form.module.scss';

function CardForm({ id }: { id: number }) {
  const currentUserId = useAppSelector(selectCurrentUserId);
  const isFormActive = useAppSelector(selectIsFormActive);
  const isFetching = useAppSelector(selectIsFetching);
  const isUserDataSend = useAppSelector(selectIsUserDataSend);
  const showNotification = useAppSelector(selectShowNotification);

  const user = useAppSelector((state) => selectUserById(state, id));
  const { register, reset, handleSubmit } = useForm();
  const {
    name, email, username, address, phone, website,
  } = user;
  const { street, city, zipcode } = address;

  return (
    <form
      className={styles['card-form']}
    // onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset disabled={!isFormActive}>
        <CardFormItem
          title="name"
          defaultValue={name}
          register={register}
        />
        <CardFormItem
          title="User name"
          defaultValue={username}
          register={register}
        />
        <CardFormItem
          title="email"
          defaultValue={email}
          type="email"
          register={register}
        />
        <CardFormItem
          title="street"
          defaultValue={street}
          register={register}
        />
        <CardFormItem
          title="city"
          defaultValue={city}
          register={register}
        />
        <CardFormItem
          title="zip-code"
          defaultValue={zipcode}
          register={register}
        />
        <CardFormItem
          title="phone"
          defaultValue={phone[0]}
          type="tel"
          register={register}
        />
        <CardFormItem
          title="website"
          defaultValue={website}
          register={register}
        />
        <CardFormItem
          title="Comment"
          componentType="textarea"
          defaultValue=""
          register={register}
        />
        <button
          type="submit"
          disabled={isFetching}
          className={`button ${styles['card-form__submit-button']}`}
        >
          Отправить
        </button>
        { showNotification
          ? <Alert isError={isUserDataSend} />
          : ''}
      </fieldset>
    </form>
  );
}

export default CardForm;
