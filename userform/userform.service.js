const userform = require('../db');
const { createUserForm, findUserForm, findUserFormById, editUserForm, deletUserForm } = require('./userform.repository');

async function createUserFormService(newUserForm) {
  try {
    const newForm = await createUserForm(newUserForm);
    return newForm;
  } catch (error) {
    console.error("Error di service saat membuat formulir:", error);
    throw new Error("Gagal membuat formulir. Silakan coba lagi.");
  }
}

async function getAllUserForm() {
  const userform = await findUserForm()
  return userform
}


async function getUserFormById(id) {
  const userform = await findUserFormById(id)
  if (!userform){
    throw new Error("cannot Find User");
  }
  return userform 
}

async function editUserFormById(id, userForm) {
  const updateUserForm = await editUserForm(id, userForm)
  return updateUserForm
  
}

async function deleteUserFormById(id) {
  await getUserFormById(id)
  await deletUserForm(id)
  
}
module.exports = { createUserFormService, getAllUserForm, getUserFormById, editUserFormById, deleteUserFormById };

