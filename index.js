const express = require('express');
const app = express();

app.use(express.json());
function isletter(ch) {
  return /[a-zA-Z]/.test(ch);
}

function iseven(ch) {
  return ch % 2 == 0;
}

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  console.log(data);
  var odd_numbers = [];
  var even_numbers = [];
  var alphabets = [];

  for (var i = 0; i < data.length; i++) {
    if (isletter(data[i])) {
      alphabets.push(data[i]);
    } else if (iseven(data[i])) {
      even_numbers.push(data[i]);
    } else if (!iseven(data[i])) {
      odd_numbers.push(data[i]);
    }
  }

  fullname = 'Abhishek';
  Roll_no = '2010991792';
  dob = '30112001';
  emailid = 'abhishek1792.be20@chitkara.edu.in';

  if (data) {
    return res.status(200).json({
      is_success: true,
      user_id: fullname + '_' + dob,
      email: emailid,
      roll_number: Roll_no,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
    });
  }
});

app.listen(3000, () => {
  console.log('server is listening');
});
