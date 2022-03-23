import axios from 'axios';

const handler = async (req, res) => {
  console.log(req.body);
  if (req.method === 'POST') {
    await axios.post(
      'https://property-expert-backend-prod.herokuapp.com/society',
      JSON.stringify(req.body)
    );
  }
};
export default handler;
