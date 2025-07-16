import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import notificationsData from './notifications';
import './App.css';


const NotificationItem = ({ notification, children }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <strong>{notification.id}</strong>: <strong>{notification.name}</strong>: {notification.message}
      </span>
      <div>{children}</div>
    </li>
  );
};

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <h1 className="mb-3">Notifications</h1>

      <p className="mb-3">Total: {notifications.length}</p>

     {notifications.length === 0 ? (
        <p className="text-success">No notifications!</p>
      ) : (
        <ul className="list-group mb-3">
          {notifications.map(n => (
            <NotificationItem key={n.id} notification={n}>
              <button
                onClick={() => clearNotification(n.id)}
                className="btn btn-sm btn-danger"
              >
                Clear
              </button>
            </NotificationItem>
          ))}
        </ul>
      )}

       <button
        onClick={clearAll}
        className="btn btn-primary"
      >

        Clear All
      </button>
    </div>
  );
};

export default App
