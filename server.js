const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_ah4pbii', // Verifica este ID en el dashboard
      template_id: 'template_ren18vn', // Verifica este ID en el dashboard
      user_id: 'RqoyahhB62q4Og5HX', // Verifica la clave pública en el dashboard
      template_params: { firstName, lastName, email, phone, message },
    });

    console.log('Email sent successfully!', response.data);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error al enviar correo:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running en http://localhost:${PORT}`);
});
