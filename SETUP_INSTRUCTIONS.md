# Portfolio Setup Instructions

## Contact Form Setup

Your contact form is currently showing an error because the backend server needs proper configuration. Here are the steps to fix it:

### Option 1: Configure Your Backend Server (Recommended)

1. **Get Gmail App Password:**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Generate the password
   - Copy the 16-character password

2. **Update Backend Environment Variables:**
   - Open `backend/.env` file
   - Replace `your-gmail-app-password-here` with your actual app password
   - Save the file

3. **Test Locally:**

   ```bash
   cd backend
   npm install
   npm start
   ```

   Server should run on http://localhost:5000

4. **Update Frontend (for local testing):**
   - In `src/components/Contact.jsx`, temporarily change the URL to:

   ```javascript
   const response = await fetch("http://localhost:5000/send-email", {
   ```

5. **Deploy Backend to Render:**
   - Your backend is already deployed at: https://betsi-s-portfolio-1.onrender.com
   - Go to Render dashboard
   - Find your service "betsi-s-portfolio-1"
   - Go to Environment tab
   - Add these environment variables:
     - `EMAIL_USER`: betselottigistu4@gmail.com
     - `EMAIL_PASS`: your-gmail-app-password
   - Save and redeploy

### Option 2: Use Mailto Fallback (Current Setup)

The contact form now has a fallback mechanism:

- If the backend fails, it will automatically open the user's email client
- The email will be pre-filled with the contact information
- This works immediately without any backend configuration

### Option 3: Use FormSubmit (No Backend Required)

Replace the backend with FormSubmit service:

1. Update `src/components/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    const response = await fetch(
      "https://formsubmit.co/betselottigistu4@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _captcha: "false",
        }),
      },
    );

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
  }

  setLoading(false);
};
```

2. First submission will require email confirmation
3. After confirmation, all future submissions work automatically

## Current Status

✅ Frontend is fully functional with animations
✅ Fallback to mailto is working
⚠️ Backend server needs environment variables configured
⚠️ Render deployment needs EMAIL_PASS environment variable

## Quick Fix

The easiest solution right now is to:

1. Go to your Render dashboard
2. Add the EMAIL_PASS environment variable
3. Redeploy the service

Your contact form will then work perfectly!
