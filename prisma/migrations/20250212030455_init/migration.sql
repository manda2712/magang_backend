-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Userform" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nama_inisial" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "nomor_telepon" INTEGER NOT NULL,
    "jenis_aduan" TEXT NOT NULL,
    "perihal" INTEGER NOT NULL,
    "lokasi_kejadian" INTEGER NOT NULL,
    "tanggal_kejadian" TIMESTAMP(3) NOT NULL,
    "uraian_Pengaduan" TEXT NOT NULL,
    "bukti_pendukung" TEXT NOT NULL,
    "nama_terlapor" TEXT NOT NULL,
    "nik_terlapor" INTEGER NOT NULL,
    "Jabatan_terlapor" TEXT NOT NULL,

    CONSTRAINT "Userform_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
