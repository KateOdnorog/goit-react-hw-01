import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <h2>Task 2</h2>
      <ul className={s.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={s.friendListItem} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
