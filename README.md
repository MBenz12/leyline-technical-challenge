# LeyLine Technical Challenge

This project implements a settlement process between two parties, Party A and Party B. The system handles iterative negotiation of settlement amounts by Party A, along with approvals or objections from Party B. The project ensures that all changes and responses are reflected on both Party A's and Party B's interfaces.

## Table of Contents
- [Objective](#objective)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Additional Information](#additional-information)

## Objective

Create a system where Party A can submit and modify a settlement amount to Party B, and Party B can respond by either agreeing to or disputing the amount. The process continues until both parties reach an agreement.

## Requirements

1. **Initial Submission:** Allow Party A to submit an initial settlement amount.
2. **Modification and Resubmission:** Enable Party A to modify and resubmit the settlement amount any number of times until Party B responds.
3. **Dispute and Agreement Handling:** Allow Party B to dispute or agree to the submitted amount. If disputed, Party A can modify and resubmit the amount.
4. **Display Responses:** Display Party B’s current response on Party A’s interface, and display the submitted amount on Party B’s interface.
5. **Settlement Completion:** Transition to a settled state once Party B agrees to the amount.

## Technologies Used

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, SQLite
- State Management: React Hooks
- Notifications: React Hot Toast

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
2. **Install dependencies:**
   ```sh
   yarn install
3. **Run the development server:**
   ```sh
   yarn dev
4. **Open your browser and navigate to:**
   ```sh
   http://localhost:3000
## Usage

1. **Enter a username on the home page and submit:**
2. **Create a settlement by specifying the amount and the username of Party B.**
3. **Party B can respond to the settlement by either agreeing or disputing it.**
4. **Party A can modify the amount and resubmit if Party B disputes the settlement.**
5. **The process continues until both parties reach an agreement.**

## API Endpoints

- **Submit Settlement**
  ```sh
  POST /api/submit-settlement
- **Modify Settlement**
   ```sh
   PUT /api/modify-settlement
- **Respond to Settlement**
   ```sh
   PUT /api/respond-settlement
- **Get Settlement Status**
   ```sh
   GET /api/get-settlement-status?{id | partyA | partyB}=
## Additional Information
- Ensure SQLite is properly configured and the database file is created with the required tables.
- The project does not handle real-time updates or conflicts occurring exactly at the same time, as stated in the requirements.
- Feel free to reach out if you have any questions or need further clarification.