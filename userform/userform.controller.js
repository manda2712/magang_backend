const express = require("express");
const router = express.Router();
const userFormService = require("./userform.service"); // Pastikan path ini benar
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/"); // Simpan file di folder uploads/
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Rename unik
  },
});

const upload = multer({ storage });

router.post("/submitForm",  upload.single("bukti_pendukung"), async (req, res) => {
  try {
    const userForm = req.body;
    userForm.bukti_pendukung = req.file ? req.file.path : null;
    const newForm = await userFormService.createUserFormService(userForm); // Sesuaikan nama fungsi
    res.status(201).json(newForm);
  } catch (error) {
    console.error("Error saat membuat formulir:", error);
    res.status(500).json({ message: "Gagal membuat formulir", error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const userform = await userFormService.getAllUserForm();
    res.send(userform)
  } catch (error) {
    res.status(500).send(error.message)
    
  } 
})

router.get("/:id", async (req, res) => {
  try {
    const userFormId = parseInt(req.params.id);
    const userform = await userFormService.getUserFormById(userFormId);
    res.send(userform)
  } catch (error) {
    res.status(400).send(error.message)
    
  }  
})

router.patch("/:id", async (req, res) => {
  try {
    const userFromId = parseInt(req.params.id);
    const userForm = req.body;
    const updateUserForm = await userFormService.editUserFormById(userFromId, userForm)

    res.status(200).send({data: updateUserForm, message: "User Form Update Successfully"}) 
  } catch (error) {
    res.status(400).send(error.message)
  }  
})

router.delete("/:id", async (req,res) => {
  try {
    const userFormId = parseInt(req.params.id)
    await userFormService.deleteUserFormById(userFormId)
    res.status(200).json({message: "User Form Successfully delete"})
  } catch (error) {
    res.status(400).send(error.message)
    
  }
  
})
module.exports = router;
