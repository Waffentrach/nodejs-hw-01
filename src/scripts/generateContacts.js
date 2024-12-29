import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const createFakeContact = () => {
  const id = Math.floor(Math.random() * 100000);
  const name = `Contact_${id}`;
  const phone = `+380${Math.floor(100000000 + Math.random() * 900000000)}`;
  return { id, name, phone };
};

export const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`Successfully added ${number} new contacts!`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);
