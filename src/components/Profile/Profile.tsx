import classes from "./Profile.module.scss";

const Profile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    imageUrl: "/vite.svg",
    active: false,
  };
  if (!user.active) {
    return null;
  }

  return (
    <div className={classes.profile}>
      <div className={classes.image}>
        <img src={user.imageUrl} alt="Аватар пользователя" />
      </div>
      <p
        className={classes.userName}
      >{`${user.firstName} ${user.lastName[0]}.`}</p>
    </div>
  );
};

export default Profile;
