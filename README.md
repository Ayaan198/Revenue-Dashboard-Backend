# 📧 Revenue Dashboard Backend

**Email-Sender using NodeJS, nodemailer, Gmail API**

This project is a **business automation tool** that processes sales data and sends automated email reports. The system reads client information from CSV files and uses **NodeJS with Gmail API integration** to deliver personalized revenue reports via email.

This solution is designed for **businesses, sales teams, and managers** looking to automate their **revenue reporting workflow** and streamline communication with clients and team members.

---

## 🚀 Key Features
### Email Automation
- **CSV Data Processing**: Automatically reads client data from spreadsheets.
- **Personalized Emails**: Sends customized revenue reports to multiple recipients.
- **Gmail API Integration**: Secure email delivery through Google's API.

### Data Handling
- **CSV File Support**: Processes client data including name, email, revenue, orders, and sales.
- **Bulk Email Sending**: Efficiently handles multiple email recipients.
- **Error Handling**: Robust error management for failed email deliveries.

### Business Intelligence
- **Revenue Tracking**: Automated processing of sales data.
- **Report Generation**: Creates structured email reports from raw data.
- **Team Communication**: Streamlines internal reporting workflows.

---

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Email Service**: Gmail API, Nodemailer
- **Data Format**: CSV files
- **Language**: JavaScript
- **Package Management**: npm

---

## 📂 Project Structure
```plaintext
Revenue-Dashboard-Backend/
│
├── data/
│   └── clients.csv             # Client data: name, email, revenue, orders, sales
├── node_modules/               # Node.js dependencies (auto-generated)
├── mailer.js                   # Main Node.js script to send emails
├── package.json                # Node.js dependencies and scripts
├── package-lock.json           # Dependency lock file
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started
### Prerequisites
- Node.js 16+ installed on your system
- Gmail account with API access enabled
- CSV file with client data

### 1. Clone the Repository
```bash
git clone https://github.com/Ayaan198/Revenue-Dashboard-Backend.git
cd Revenue-Dashboard-Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Gmail API
Set up your Gmail API credentials and configure the authentication in `mailer.js`.

### 4. Prepare Data
Add your client data to `data/clients.csv` with the following format:
```csv
name,email,revenue,orders,sales
Client Name,client@example.com,50000,25,100
```

### 5. Run the Application
```bash
node mailer.js
```

---

## ✅ Future Enhancements
- **Dashboard Interface**: Web-based dashboard for data visualization.
- **Multiple File Formats**: Support for Excel and JSON data files.
- **Scheduled Reports**: Automated recurring email reports.
- **Advanced Analytics**: Enhanced revenue insights and charts.

---

## 👨‍💻 Contributions
I would welcome contributions!
1. Fork the repository
2. Create a new branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add NewFeature'`)
4. Push the branch (`git push origin feature/NewFeature`)
5. Create a pull request

⭐ **Star this repository if you found it useful!**

---

## 📧 Contact
**Email**: ayanbate22@gmail.com  
**Issues**: [GitHub Issues](https://github.com/Ayaan198/Revenue-Dashboard-Backend/issues)

---

> **Note**: Ensure proper Gmail API authentication and permissions are set up before running the email automation script.
