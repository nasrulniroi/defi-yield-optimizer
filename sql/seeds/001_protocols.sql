-- Seed data for protocols
INSERT INTO protocols (slug, name, category, website, chains, status) VALUES
('aave-v3', 'Aave V3', 'lending', 'https://aave.com', ARRAY['ethereum', 'polygon', 'arbitrum', 'optimism'], 'active'),
('compound-v3', 'Compound V3', 'lending', 'https://compound.finance', ARRAY['ethereum', 'polygon', 'base'], 'active'),
('yearn-finance', 'Yearn Finance', 'yield', 'https://yearn.fi', ARRAY['ethereum', 'fantom'], 'active'),
('convex-finance', 'Convex Finance', 'yield', 'https://convexfinance.com', ARRAY['ethereum'], 'active')
ON CONFLICT (slug) DO NOTHING;

-- Seed data for pools
INSERT INTO pools (protocol_id, chain, name, symbol, tvl_usd, apy_base, apy_reward, apy_total, risk_score, il_risk) VALUES
((SELECT id FROM protocols WHERE slug = 'aave-v3'), 'ethereum', 'USDC Pool', 'USDC', 2500000000, 3.2, 1.9, 5.1, 2.1, FALSE),
((SELECT id FROM protocols WHERE slug = 'aave-v3'), 'ethereum', 'WETH Pool', 'WETH', 3200000000, 2.1, 1.1, 3.2, 1.8, FALSE),
((SELECT id FROM protocols WHERE slug = 'aave-v3'), 'ethereum', 'DAI Pool', 'DAI', 1800000000, 3.0, 1.8, 4.8, 2.0, FALSE),
((SELECT id FROM protocols WHERE slug = 'compound-v3'), 'ethereum', 'USDC Market', 'USDC', 1800000000, 2.8, 1.4, 4.2, 2.3, FALSE),
((SELECT id FROM protocols WHERE slug = 'compound-v3'), 'ethereum', 'WETH Market', 'WETH', 2100000000, 1.8, 1.0, 2.8, 1.9, FALSE),
((SELECT id FROM protocols WHERE slug = 'yearn-finance'), 'ethereum', 'WETH Vault', 'WETH', 800000000, 4.5, 2.3, 6.8, 4.5, FALSE),
((SELECT id FROM protocols WHERE slug = 'yearn-finance'), 'ethereum', 'USDC Vault', 'USDC', 650000000, 5.2, 2.1, 7.3, 4.2, FALSE),
((SELECT id FROM protocols WHERE slug = 'convex-finance'), 'ethereum', 'stETH-ETH Pool', 'stETH-ETH', 1200000000, 5.8, 2.4, 8.2, 5.1, TRUE),
((SELECT id FROM protocols WHERE slug = 'convex-finance'), 'ethereum', '3pool', '3CRV', 900000000, 4.1, 3.2, 7.3, 4.8, FALSE);
