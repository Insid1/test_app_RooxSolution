import { memo } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CardFormItemProps {
  type?: React.HTMLInputTypeAttribute,
  defaultValue: string | number,
  title: string,
  register: UseFormRegister<FieldValues>,
  componentType?: undefined | 'textarea',
}

function CardFormItem({
  type = 'text', defaultValue, title, register, componentType,
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
            {...register(title)}
          />
        )
        : (
          <input
            required
            type={type}
            id={`input-${title}`}
            {...register(title)}
            defaultValue={defaultValue}
          />
        )}
    </>
  );
}

export default memo(CardFormItem);
