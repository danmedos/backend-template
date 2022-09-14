import { registerAs } from '@nestjs/config';
export default registerAs('rrcDB', () => ({
  type: process.env.RRC_DATABASE_TYPE,
  host: process.env.RRC_DATABASE_HOST,
  port: process.env.RRC_DATABASE_PORT,
  username: process.env.RRC_DATABASE_USERNAME,
  password: process.env.RRC_DATABASE_PASSWORD,
  database: process.env.RRC_DATABASE_DATABASE,
}));
