const express = require('express');
const router = express.Router();
const { Resend } = require('resend');

router.post('/send', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email and message are required' });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'Vision Trennds <onboarding@resend.dev>',
            to: process.env.EMAIL_RECEIVER || 'hello@visiontrennds.com',
            replyTo: email,
            subject: `Contact Form: ${subject || 'New Message'} - ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ message: 'Failed to send email: ' + error.message });
    }
});

module.exports = router;
