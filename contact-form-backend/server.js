const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configure CORS more explicitly
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Parse JSON request bodies
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nitiz.sharma.learning@gmail.com",
        pass: "gifa hqvf rouw aqup"  // Your Gmail App Password
    },
    tls: {
        rejectUnauthorized: false
    }
});

// 🔹 Contact form submission handler
app.post("/contact", (req, res) => {
    console.log("Received contact form:", req.body);
    
    const { fullName, email, phone, course, message } = req.body;

    const mailOptions = {
        from: `"${fullName}" <${email}>`,
        to: "nitiz.sharma.learning@gmail.com",
        cc: "info@nitizsharma.com",
        subject: "New Contact Form Submission",
        html: `
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Error sending contact email:", error);
            return res.status(500).json({
                success: false,
                message: "Contact email failed to send",
                error: error.message
            });
        }

        console.log("✅ Contact email sent:", info.response);
        res.status(200).json({
            success: true,
            message: "Contact message sent successfully!"
        });
    });
});

// 🔹 Group Discount form submission handler
app.post("/group-discount", (req, res) => {
    console.log("Received group discount form:", req.body);

    const { phone, countryCode, course, discount } = req.body;

    const mailOptions = {
        from: '"Group Discount Form" <nitiz.sharma.learning@gmail.com>',
        to: "nitiz.sharma.learning@gmail.com",
        cc: "info@nitizsharma.com",
        subject: "New Group Discount Submission",
        html: `
            <h2>Group Discount Request</h2>
            <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
            <p><strong>Selected Course:</strong> ${course}</p>
            <p><strong>Discount Tier:</strong> ${discount}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Error sending discount email:", error);
            return res.status(500).json({
                success: false,
                message: "Discount email failed to send",
                error: error.message
            });
        }

        console.log("✅ Group discount email sent:", info.response);
        res.status(200).json({
            success: true,
            message: "Group discount request sent successfully!"
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
