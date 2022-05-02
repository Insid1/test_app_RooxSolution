import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from 'store/data/selectors';
import { useForm } from 'react-hook-form';
import { forwardRef } from 'react';

const CardForm = forwardRef((props, fieldRef) => {
  const { id } = useParams();
  const currentUser = useSelector((state) => selectUserById(state, id));
  const { register, handleSubmit } = useForm({
    mode: 'onblur',
  });
  const {
    name, username, email,
    website, phone, address,
  } = currentUser;
  const { street, city, zipcode } = address;
  const onSubmit = (currData) => {
    const insertInnerData = () => {
      const result = {
        ...currentUser,
        ...currData,
        address: {
          ...currentUser.address,
          city: currData.city,
          street: currData.street,
          zipcode: currData.zipcode,
        },
        phone: [currData.phone, currentUser.phone[1]],
      };
      delete result.city;
      delete result.street;
      delete result.zipcode;
      return result;
    };
    // insertInnerData();
    console.log(insertInnerData());
  };

  return (
    <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset ref={fieldRef} disabled>
        <label className="label-for-input" htmlFor="input-name">
          Name
        </label>
        <input
          type="text"
          id="input-name"
          defaultValue={name}
          {...register('name')}
          required
        />
        <label className="label-for-input" htmlFor="input-name">
          User name
        </label>
        <input
          required
          type="text"
          id="input-user-name"
          defaultValue={username}
          {...register('username')}
        />
        <label className="label-for-input" htmlFor="input-name">
          E-mail
        </label>
        <input
          required
          type="email"
          id="input-name"
          {...register('email')}
          defaultValue={email}
        />
        <label className="label-for-input" htmlFor="input-street">
          Street
        </label>
        <input
          required
          type="text"
          id="input-street"
          {...register('street')}
          defaultValue={street}
        />
        <label className="label-for-input" htmlFor="input-city">
          City
        </label>
        <input
          required
          type="text"
          id="input-city"
          {...register('city')}
          defaultValue={city}
        />
        <label className="label-for-input" htmlFor="input-zipcode">
          Zip-code
        </label>
        <input
          required
          type="text"
          id="input-zipcode"
          maxLength={10}
          {...register('zipcode')}
          defaultValue={zipcode}
        />
        <label className="label-for-input" htmlFor="input-phone">
          Phone
        </label>
        <input
          required
          type="tel"
          id="input-phone"
          {...register('phone')}
          defaultValue={phone[0]}
        />
        <label className="label-for-input" htmlFor="input-website">
          WebSite
        </label>
        <input
          required
          type="text"
          id="input-website"
          defaultValue={website}
          {...register('website')}
        />
        <label className="label-for-input" htmlFor="input-comment">
          Comment
        </label>
        <textarea
          rows="2"
          draggable={false}
          type="text"
          placeholder="Enter the comment in the field"
          id="input-comment"
          defaultValue=""
          minLength={5}
          {...register('comment')}
        />
        <button type="submit" className="button card-form__submit-button">Отправить</button>

      </fieldset>
    </form>
  );
});
// Передать ref из верхнего компонента

export default CardForm;
