const { Pool } = require("pg");

// MySQL connection settings
const pool = new Pool({
  host: "aws-0-us-east-1.pooler.supabase.com",
  user: "postgres.cmdgglavikkckwuseocx",
  password: "Highsteaks12123",
  database: "postgres",
  port: 5432,
});

module.exports = pool;
