# 🩸 Blood Bank Management System (Oracle SQL)

A comprehensive SQL-based blood bank management system that models hospitals, donors, patients, blood inventory, donation records, requests, and rewards — complete with triggers, procedures, and seeded data.

---

## 📁 Contents

- `SQL/` — Contains all DDL, DML, triggers, procedures, and menu logic.
- `ER.drawio.png` — ER diagram showing relationships between all entities.

---

## 🗃️ Schema Overview

### Core Tables

- `hospital` – Stores hospital information
- `donor` – Tracks blood donors and their details
- `patient` – Records patient data, linked to hospitals
- `blood_inventory` – Manages blood stock, status & expiry
- `blood_donation` – Logs donations made by donors
- `donor_reward` – Tracks reward points and badges
- `blood_request` – Captures blood requirements by patients

### Constraints & Relationships

- Foreign keys ensure referential integrity (e.g. patient ↔ hospital)
- Data types and constraints follow Oracle SQL syntax

---

## ⚙️ Functional Highlights

### ✅ Triggers

- `trg_blood_expiry_check` – Automatically marks expired blood as `'EXPIRED'`
- `trg_inventory_audit` – Outputs inventory changes to `DBMS_OUTPUT`

### ✅ Stored Procedures

- `insert_donor`, `insert_patient`, `add_donation`, `request_blood`
- Reporting utilities: `show_donors`, `show_inventory_summary`, `show_requests`
- Search utilities: `find_donors_by_blood_group`, `show_rewards`, etc.

### ✅ Menu Simulation

- Simulates a terminal menu with options like:
  - Insert donor/patient
  - Add donation or request
  - View inventory & reward summaries

---
