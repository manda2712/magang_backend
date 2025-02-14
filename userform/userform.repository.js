const prisma = require("../db");

async function createUserForm(userForm) {
 
    const newForm = await prisma.userform.create({ // Pastikan userForm sesuai dengan nama model di Prisma
      data: {
        email: userForm.email,
        nama_inisial: userForm.nama_inisial,
        alamat: userForm.alamat,
        nomor_telepon: userForm.nomor_telepon,
        jenis_aduan: userForm.jenis_aduan,
        perihal: userForm.perihal,
        lokasi_kejadian: userForm.lokasi_kejadian,
        tanggal_kejadian: new Date(userForm.tanggal_kejadian),
        uraian_Pengaduan: userForm.uraian_Pengaduan,
        bukti_pendukung: userForm.bukti_pendukung,
        nama_terlapor: userForm.nama_terlapor,
        nik_terlapor: userForm.nik_terlapor.toString(),
        Jabatan_terlapor: userForm.Jabatan_terlapor,
      }
    });
    return newForm;
}

async function findUserForm() {
  const userForm = await prisma.userform.findMany({
      select:{
        id: true,
        email: true,
        nama_inisial: true,
        alamat: true,
        nomor_telepon: true,
        jenis_aduan: true,
        perihal: true,
        lokasi_kejadian: true,
        tanggal_kejadian: true,
        uraian_Pengaduan: true,
        bukti_pendukung: true,
        nama_terlapor: true,
        nik_terlapor: true,
        Jabatan_terlapor: true,   
      }
  });
  return userForm
}

async function findUserFormById(id) {
  const userForm = await prisma.userform.findUnique({
    where :{
      id : parseInt(id)
    },
    select :{
        id: true,
        email: true,
        nama_inisial: true,
        alamat: true,
        nomor_telepon: true,
        jenis_aduan: true,
        perihal: true,
        lokasi_kejadian: true,
        tanggal_kejadian: true,
        uraian_Pengaduan: true,
        bukti_pendukung: true,
        nama_terlapor: true,
        nik_terlapor: true,
        Jabatan_terlapor: true,
    }
  })
  return userForm
}

async function editUserForm(id, userForm) {
  const updateUserForm = await prisma.userform.update({
    where :{
      id: parseInt(id)
    },
    data: {
      email: userForm.email,
        nama_inisial: userForm.nama_inisial,
        alamat: userForm.alamat,
        nomor_telepon: userForm.nomor_telepon,
        jenis_aduan: userForm.jenis_aduan,
        perihal: userForm.perihal,
        lokasi_kejadian: userForm.lokasi_kejadian,
        tanggal_kejadian: new Date(userForm.tanggal_kejadian),
        uraian_Pengaduan: userForm.uraian_Pengaduan,
        bukti_pendukung: userForm.bukti_pendukung,
        nama_terlapor: userForm.nama_terlapor,
        nik_terlapor: userForm.nik_terlapor.toString(),
        Jabatan_terlapor: userForm.Jabatan_terlapor,
    }
  })
  return updateUserForm 
}

async function deletUserForm(id) {
  await prisma.userform.delete({
    where:{
      id: parseInt(id)
    }
  })
 
}

module.exports = { createUserForm, findUserForm, findUserFormById, editUserForm, deletUserForm };
