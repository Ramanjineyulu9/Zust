import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));

app.post('/api/send-email', async (req, res) => {
    const { firstname, lastname, email, message } = req.body;

    console.log("Received email request:", { firstname, lastname, email });

    // Basic validation
    if (!firstname || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify connection config
        await transporter.verify();

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email, // Allow replying to the sender
            subject: `New Contact Form Message from ${firstname} ${lastname}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0974B0;">New Contact Message</h2>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
        });

        console.log("Email sent successfully");
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
