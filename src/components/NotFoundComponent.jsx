import React from 'react';

const NotFoundComponent = () => (
  <div className="text-center">
    <img alt="Страница не найдена" className="img-fluid" src="https://lumpics.ru/wp-content/uploads/2021/01/oshibka-404-stranicza-ne-najdena-v-brauzere.png" />
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className="text-muted">
      Но вы можете перейти
      <a href="/"> на главную страницу</a>
    </p>
  </div>
);

export default NotFoundComponent;
