import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const createFakeContact = () => {
  const id = Math.floor(Math.random() * 100000);
  const name = `Contact_${id}`;
  const phone = `+380${Math.floor(100000000 + Math.random() * 900000000)}`;
  return { id, name, phone };
};

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);

    console.log('Successfully added one new contact:', newContact);
  } catch (error) {
    console.error('Error adding one contact:', error.message);
  }
};

addOneContact();
