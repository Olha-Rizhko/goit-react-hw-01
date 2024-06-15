import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';


export default function FriendsList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendsList}>
        {friends.map((friend) => (
          <li key={friend.id} className={css.friendsListItem}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}