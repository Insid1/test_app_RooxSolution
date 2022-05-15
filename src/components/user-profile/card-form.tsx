import Alert from 'components/alert/alert';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postUser } from 'store/data/api-actions';
import {
  selectCurrentUser,
  selectIsFetching, selectIsUserDataSend,
  selectShowNotification,
} from 'store/data/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectIsFormActive } from 'store/interface/selectors';
import { IFormDataUser } from 'types/form-data-user';
import { adaptFormDataToClient } from 'util/adapter';
import CardFormItem from './card-form-item';
import styles from './card-form.module.scss';

function CardForm() {
  const isFormActive = useAppSelector(selectIsFormActive);
  const isFetching = useAppSelector(selectIsFetching);
  const isUserDataSend = useAppSelector(selectIsUserDataSend);
  const showNotification = useAppSelector(selectShowNotification);
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);
  const { register, handleSubmit } = useForm<IFormDataUser>();
  const {
    name, email, username, address, phone, website,
  } = user;
  const { street, city, zipcode } = address;
  const onSubmit: SubmitHandler<IFormDataUser> = (data) => {
    const adaptedData = adaptFormDataToClient(data, user);
    dispatch(postUser(adaptedData));
  };

  return (
    <form
      className={styles['card-form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset disabled={!isFormActive}>
        <CardFormItem
          title="name"
          defaultValue={name}
          register={register}
          dataName="name"
        />
        <CardFormItem
          title="User name"
          defaultValue={username}
          register={register}
          dataName="username"
        />
        <CardFormItem
          title="email"
          defaultValue={email}
          type="email"
          register={register}
          dataName="email"
        />
        <CardFormItem
          title="street"
          defaultValue={street}
          register={register}
          dataName="street"

        />
        <CardFormItem
          title="city"
          defaultValue={city}
          register={register}
          dataName="city"
        />
        <CardFormItem
          title="zip-code"
          defaultValue={zipcode}
          register={register}
          dataName="zipcode"
        />
        <CardFormItem
          title="phone"
          defaultValue={phone[0]}
          type="tel"
          register={register}
          dataName="phone"
        />
        <CardFormItem
          title="website"
          defaultValue={website}
          register={register}
          dataName="website"
        />
        <CardFormItem
          title="Comment"
          componentType="textarea"
          defaultValue=""
          register={register}
          dataName="comment"
        />
        <button
          type="submit"
          disabled={isFetching}
          className={`button ${styles['card-form__submit-button']}`}
        >
          Отправить
        </button>
        { showNotification
          ? <Alert isError={!isUserDataSend} />
          : ''}
      </fieldset>
    </form>
  );
}

export default CardForm;
