const handler = async (req, res) => {
  const data = await fetch('https://property-expert-backend-prod.herokuapp.com/society').then(
    (res) => res.json()
  );
  res.status(200).json(data);
};
export default handler;
