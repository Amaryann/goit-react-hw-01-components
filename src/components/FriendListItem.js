export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li key={id}>
            <span></span>
            <img
        
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p>{name}</p>

        </li>
    )
}