import { Profile } from './profile/Profile';
import user from './profile/user.json';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  padding: 20,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={styles}>
      <Profile {...user} />
    </div>
  );
};
