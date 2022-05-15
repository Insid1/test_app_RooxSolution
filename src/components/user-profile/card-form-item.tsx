import { memo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormDataUser } from 'types/form-data-user';

interface CardFormItemProps {
  type?: React.HTMLInputTypeAttribute,
  defaultValue: string | number,
  title: string,
  dataName: keyof IFormDataUser,
  register: UseFormRegister<IFormDataUser>,
  componentType?: undefined | 'textarea',
}

function CardFormItem({
  type = 'text', defaultValue, title, register, componentType, dataName,
} : CardFormItemProps) {
  return (
    <>
      <label
        className="label-for-input"
        htmlFor={`input-${title}`}
      >
        {title}
      </label>
      {componentType
        ? (
          <textarea
            rows={3}
            draggable={false}
            placeholder="Enter the comment in the field"
            id={`input-${title}`}
            defaultValue={defaultValue}
            minLength={5}
            {...register(dataName)}
          />
        )
        : (
          <input
            required
            type={type}
            id={`input-${title}`}
            {...register(dataName)}
            defaultValue={defaultValue}
          />
        )}
    </>
  );
}

export default memo(CardFormItem);
