import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();

  const id = req.query.id;

  const entry = await db.getById(id);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify(entry));
};

export default allAvos;
