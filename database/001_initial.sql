CREATE TABLE IF NOT EXISTS vaults (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  protocol VARCHAR(50) NOT NULL,
  apy DECIMAL(10,4),
  tvl DECIMAL(20,2),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS harvests (
  id SERIAL PRIMARY KEY,
  vault_id INTEGER REFERENCES vaults(id),
  amount DECIMAL(20,8),
  gas_cost DECIMAL(20,8),
  harvested_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_vaults_protocol ON vaults(protocol);
CREATE INDEX idx_harvests_vault ON harvests(vault_id);
