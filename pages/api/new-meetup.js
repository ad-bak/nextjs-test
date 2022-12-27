function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
    //add mongoDB code here
  }
}

export default handler;
