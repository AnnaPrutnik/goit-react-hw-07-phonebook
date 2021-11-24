// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import { getFilteredContacts } from '../../redux/phonebook';

import './User.scss';

function UserList() {
  const users = useSelector(getFilteredContacts);

  return (
    <ul className="list">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
