-- DeFi Yield Optimizer - Initial Schema
-- Version: 001

CREATE TABLE IF NOT EXISTS protocols (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    website VARCHAR(255),
    logo_url VARCHAR(255),
    chains TEXT[] DEFAULT '{}',
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pools (
    id SERIAL PRIMARY KEY,
    protocol_id INTEGER REFERENCES protocols(id),
    pool_address VARCHAR(42),
    chain VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(50),
    deposit_token VARCHAR(42),
    reward_tokens TEXT[] DEFAULT '{}',
    tvl_usd DECIMAL(20, 2) DEFAULT 0,
    apy_base DECIMAL(10, 4) DEFAULT 0,
    apy_reward DECIMAL(10, 4) DEFAULT 0,
    apy_total DECIMAL(10, 4) DEFAULT 0,
    risk_score DECIMAL(5, 2) DEFAULT 0,
    il_risk BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS yield_history (
    id SERIAL PRIMARY KEY,
    pool_id INTEGER REFERENCES pools(id),
    apy DECIMAL(10, 4) NOT NULL,
    tvl_usd DECIMAL(20, 2) NOT NULL,
    recorded_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_positions (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(42) NOT NULL,
    pool_id INTEGER REFERENCES pools(id),
    deposited_amount DECIMAL(30, 18) DEFAULT 0,
    deposited_value_usd DECIMAL(20, 2) DEFAULT 0,
    current_value_usd DECIMAL(20, 2) DEFAULT 0,
    rewards_earned_usd DECIMAL(20, 2) DEFAULT 0,
    auto_compound BOOLEAN DEFAULT TRUE,
    entry_date TIMESTAMP DEFAULT NOW(),
    last_compound_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(42) NOT NULL,
    tx_hash VARCHAR(66) UNIQUE NOT NULL,
    type VARCHAR(20) NOT NULL,
    protocol VARCHAR(50),
    pool VARCHAR(100),
    amount DECIMAL(30, 18),
    token VARCHAR(20),
    value_usd DECIMAL(20, 2),
    gas_used BIGINT,
    gas_cost_usd DECIMAL(10, 4),
    status VARCHAR(20) DEFAULT 'pending',
    block_number BIGINT,
    chain VARCHAR(50) DEFAULT 'ethereum',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS rebalance_history (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(42) NOT NULL,
    from_protocol VARCHAR(50),
    to_protocol VARCHAR(50),
    from_pool VARCHAR(100),
    to_pool VARCHAR(100),
    amount DECIMAL(30, 18),
    token VARCHAR(20),
    expected_apy_improvement DECIMAL(10, 4),
    actual_apy_improvement DECIMAL(10, 4),
    gas_cost_usd DECIMAL(10, 4),
    status VARCHAR(20) DEFAULT 'pending',
    executed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_settings (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(42) UNIQUE NOT NULL,
    auto_compound BOOLEAN DEFAULT TRUE,
    auto_rebalance BOOLEAN DEFAULT TRUE,
    rebalance_threshold DECIMAL(5, 2) DEFAULT 1.5,
    max_slippage DECIMAL(5, 2) DEFAULT 0.5,
    gas_strategy VARCHAR(20) DEFAULT 'standard',
    risk_tolerance VARCHAR(20) DEFAULT 'moderate',
    preferred_protocols TEXT[] DEFAULT '{}',
    blacklisted_protocols TEXT[] DEFAULT '{}',
    notifications_email BOOLEAN DEFAULT FALSE,
    notifications_push BOOLEAN DEFAULT TRUE,
    notifications_telegram BOOLEAN DEFAULT FALSE,
    apy_alert_threshold DECIMAL(5, 2) DEFAULT 1.0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS alerts (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(42) NOT NULL,
    type VARCHAR(50) NOT NULL,
    severity VARCHAR(20) NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_pools_protocol_id ON pools(protocol_id);
CREATE INDEX idx_pools_chain ON pools(chain);
CREATE INDEX idx_yield_history_pool_id ON yield_history(pool_id);
CREATE INDEX idx_yield_history_recorded_at ON yield_history(recorded_at);
CREATE INDEX idx_user_positions_wallet ON user_positions(wallet_address);
CREATE INDEX idx_transactions_wallet ON transactions(wallet_address);
CREATE INDEX idx_transactions_hash ON transactions(tx_hash);
CREATE INDEX idx_transactions_created_at ON transactions(created_at);
CREATE INDEX idx_alerts_wallet ON alerts(wallet_address);
CREATE INDEX idx_alerts_read ON alerts(read);
