import React from 'react';

export default function Input() {
  return (
    <>
      <label htmlFor="avatar">
        <img src="/icon/upload.svg" alt="icon" width={90} height={90} />
      </label>
      <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
    </>
  );
}
