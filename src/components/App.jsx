import { Profile } from './profile/Profile';
import user from './profile/user.json';

export const App = () => {
  return (
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
      <Profile {...user} />
    </div>
  );
};
