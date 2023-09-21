import Database from '@databases/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const getAllAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new Database();
    let id = req.query.id;
    console.log(id);
    console.log(id);

    if (Array.isArray(id)) {
        id = id[0];
    }
    const avocados = await db.getById(id);

    return res.json({
        error: false,
        data: avocados,
    });
};
export default getAllAvos;
