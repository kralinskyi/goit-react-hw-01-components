import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";
import messages from "./Comments/messages.json";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friendlist } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Comments } from "./Comments/Comments";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
      <Comments comments={messages} />
    </div>
  );
}
