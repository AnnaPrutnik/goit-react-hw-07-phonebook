import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook';
import './User.scss';

function UserItem({ user }) {
  const dispatch = useDispatch();
  const onDeleteContact = e => dispatch(deleteContact(e.target.id));

  const { id, name, phone } = user;

  return (
    <li className="item">
      <span>
        {name}: {phone}
      </span>
      <button id={id} type="button" onClick={onDeleteContact} className="btn">
        Delete
      </button>
    </li>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default UserItem;
