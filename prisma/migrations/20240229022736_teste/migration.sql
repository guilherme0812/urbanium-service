-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('SALE', 'MONTHLY_RENTAL', 'DAILY_RENTAL');

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company_id" TEXT,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "immobilies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "availability" "Availability" NOT NULL,
    "num_bedrooms" INTEGER NOT NULL DEFAULT 0,
    "num_bathrooms" INTEGER NOT NULL DEFAULT 0,
    "num_air_conditioners" INTEGER NOT NULL DEFAULT 0,
    "num_parking_spaces" INTEGER NOT NULL DEFAULT 0,
    "num_maximum_occupancy" INTEGER NOT NULL DEFAULT 0,
    "num_kitchen" INTEGER NOT NULL DEFAULT 0,
    "wifi" BOOLEAN NOT NULL DEFAULT false,
    "pool" BOOLEAN NOT NULL DEFAULT false,
    "xCoordinate" TEXT,
    "yCoordinate" TEXT,
    "country_id" INTEGER,
    "district_id" INTEGER,
    "city_id" INTEGER,
    "company_id" TEXT,

    CONSTRAINT "immobilies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "immobilies" ADD CONSTRAINT "immobilies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
