This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Specification by [Roox Solution](https://roox.ru/)

## Необходимо сверстать предложенный макет, и написать простое SPA на React 16, используя следующие инструменты, технологии и подходы

- Компонентное использование CSS
- Реализовать SPA с использованием TypeScript
- Препроцессор scss
- Переиспользование блоков
- Разделение кода на React-компоненты (презентационные и компоненты-контейнеры)

### **Задание на вёрстку выглядит следующим образом:**

Необходимо сверстать две страницы “Список пользователей” и “Профиль пользователя”

#### Список пользователей

1. Вывести 10 пользователей соответственно макету. Данные взять  с [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
2. Пока идет загрузка списка пользователей должен быть индикатор загрузки( дизайн любой на усмотрение исполнителя )
3. Вывести на карточку:

3.1 name
3.2 address.city
3.3 company.name

4. Кнопка “Подробнее” должна вести на “Профиль пользователя”
5. Реализовать фильтрацию списка по признаку Name и City в алфавитном порядке

#### Профиль пользователя

1. Вывести в профиле:

- name

- username

- email

- address.street

- address.city

- address.zipcode

- phone

- website

2. Все поля формы, кроме Comment, должны быть предзаполнены из [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
3. Реализовать кнопку изменить, изначально поля должны быть readonly, после нажатия на кнопку поля можно редактировать
4. Реализовать валидацию на клиенте
5. Все поля формы, кроме поля Comment, обязательны для заполнения
6. Из данных формы при отправке нужно сформировать JSON и вывести его в

    консоль.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
