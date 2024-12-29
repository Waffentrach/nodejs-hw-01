import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error(`Error writing contacts to ${PATH_DB}:`, error.message);
    throw error;
  }
};
