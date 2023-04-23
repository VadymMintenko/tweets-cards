export const UserCard = ({ users }) => {
  return (
    <>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <p>name: {user.user}</p>
              <p>followers: {user.followers}</p>
              <p>tweets: {user.tweets}</p>
              <img
                src={user.avatar}
                alt={`Аватар користувача ${user.user}`}
                width="180px"
              />
              <p></p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
