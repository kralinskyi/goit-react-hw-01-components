import { Profile } from './profile/Profile';
import user from './profile/user.json';

export const App = () => {
  return (
    //  ! Створення контейнера для компонентів
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        // Відображення інформації про користувача з файлу .json
        // Передаємо властивості (props) до компонента.
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
