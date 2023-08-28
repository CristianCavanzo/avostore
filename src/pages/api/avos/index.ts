import Database from '@databases/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const getAllAvos = async (_: NextApiRequest, res: NextApiResponse) => {
    const db = new Database();
    const avocados = await db.getAll();
    
    return res.json({
        error: false,
        data: avocados,
    });
};
export default getAllAvos;
