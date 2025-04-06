import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <h2>Task 1</h2>
      <div className={s.conteiner}>
        <div className={s.firstPart}>
          <img className={s.img} src={image} alt="User avatar" />
          <p className={s.userName}>{name}</p>
          <p className={s.text}>@{tag}</p>
          <p className={s.text}>{location}</p>
        </div>

        <ul className={s.list}>
          <li className={s.listItem}>
            <span className={s.title}>Followers</span>
            <span className={s.stars}>{stats.followers}</span>
          </li>
          <li className={s.listItem}>
            <span className={s.title}>Views</span>
            <span className={s.stars}>{stats.views}</span>
          </li>
          <li className={s.listItem}>
            <span className={s.title}>Likes</span>
            <span className={s.stars}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
