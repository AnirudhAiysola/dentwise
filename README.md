# Dentwise (Production Deployment)

A production-ready full-stack web application built with **Next.js (App Router)**, **Prisma**, **Neon (Postgres)**, and **Clerk authentication**, deployed on **Sevalla**.

This repository represents a **stabilized, deployable version** of the application.

---

---

## 🧱 Tech Stack

* **Frontend:** Next.js (App Router), React
* **Backend:** Server Actions, Prisma ORM
* **Database:** Neon (PostgreSQL)
* **Authentication:** Clerk
* **Deployment:** Sevalla

---

## ✨ Key Features

* Secure user authentication with Clerk
* Database-backed user synchronization
* Protected routes and role-based access
* Appointment tracking and dashboard analytics
* Production-safe server actions
* Deployed and tested with new-user and existing-user flows

---

## 🛠️ Engineering Notes

This project was developed iteratively.

The initial structure was inspired by a reference implementation, after which the application was **extended, stabilized, and prepared for production deployment**. During development, I focused on:

* Backend data consistency between Clerk and the database
* Handling edge cases for first-time users
* Debugging server-action execution context issues
* Ensuring reliable behavior under real deployment conditions

This repository reflects the **final, stable production build** used for deployment.

---


## 🧪 Running Locally

```bash
npm install
npx prisma generate
npm run dev
```

---

## 📌 Notes

* This repository is intended to showcase a **working, production-ready application**
* Development history and experimentation were maintained separately during the learning phase
* The deployed version prioritizes stability, correctness, and clean architecture
