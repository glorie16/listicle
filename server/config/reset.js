import "./dotenv.js";
import { pool } from "./database.js";
import furnitureData from "../data/furniture.js";  // default import from data file

const createFurnitureTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS furniture;

    CREATE TABLE IF NOT EXISTS furniture (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price VARCHAR(20) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log('🎉 furniture table created successfully');
  } catch (err) {
    console.error('⚠️ error creating furniture table', err);
  }
};

const seedFurnitureTable = async () => {
  await createFurnitureTable();

  furnitureData.forEach((furniture) => {
    const insertQuery = {
      text: 'INSERT INTO furniture (name, price, image, description) VALUES ($1, $2, $3, $4)'
    };

    const values = [
      furniture.name,
      furniture.price,
      furniture.image,
      furniture.description
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('Error inserting furniture', err);
        return;
      }

      console.log(`✅ ${furniture.name} added successfully`);
    });
  });
};

seedFurnitureTable();