import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  padding: 10,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={styles}>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
