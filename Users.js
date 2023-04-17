import React from 'react'
import './Users.scss'
import ContentLoader from 'react-content-loader';


const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn">Назад</button>
    </div>
  );
};

const Users = ({ items, isLoading }) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          <User />
        </ul>
      )}
      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={320}
    height={50}
    viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="25" cy="25" r="25" />
    <rect x="64" y="0" rx="6" ry="6" width="137" height="25" />
    <rect x="64" y="32" rx="6" ry="6" width="183" height="15" />
    <rect x="290" y="12" rx="6" ry="6" width="26" height="26" />
  </ContentLoader>
);

const User = () => (
  <li>
    <div>
      <img className="avatar" src="https://reqres.in/img/faces/1-image.jpg" alt="User" />
      <div>
        <h3>Amon Bower</h3>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          george.bluth@reqres.in
        </p>
      </div>
    </div>
    <img className="action" src="/assets/plus.svg" alt="Action" />
  </li>
);


export default function Index() {
  return (
    <div className="Index">
    <Users />
    {/* <Success /> */}
  </div>
  )
}
