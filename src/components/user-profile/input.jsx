const mapToInputProperties = {
  NAME: {
    type: 'text',
    // defaultValue,
  },
  USER_NAME: {},
  EMAIL: {},
  STREET: {},
  ZIP_CODE: {},
  PHONE: {},
  WEBSITE: {},
}

function input() {
  return (
    <>
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
    </>
      
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

  );
}

export default input;
