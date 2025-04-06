import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.conteiner}>
      <img className={s.image} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <p className={s.status}>
        {isOnline ? (
          <span className={s.green}>Online</span>
        ) : (
          <span className={s.red}>Offline</span>
        )}
      </p>
    </div>
  );
};

export default FriendListItem;
