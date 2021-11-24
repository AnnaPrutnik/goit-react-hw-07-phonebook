import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getItems } from '../../redux/phonebook';
import './Forms.scss';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const checkDoubleContact = () => {
    const normalizedContactName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedContactName,
    );
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const double = checkDoubleContact();
    if (double) {
      alert(`Contact with name ${name} already exist`);
      return;
    }
    const newUser = { name, phone };
    dispatch(addContact(newUser));
    reset();
  };

  return (
    <form onSubmit={handlerSubmit} className="form">
      <div className="wrapper">
        <label htmlFor="name" className="label">
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            className="input"
            onChange={handlerChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor="phone" className="label">
          Phone
          <input
            id="phone"
            type="tel"
            name="phone"
            value={phone}
            className="input"
            autoComplete="off"
            onChange={handlerChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn">
        Add contact
      </button>
    </form>
  );
}

export default Form;
