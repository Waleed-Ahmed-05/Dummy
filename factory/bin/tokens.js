// Prints this session's running token total from ECC's cost tracker, for the /poc 2x stop.
// Usage: node factory/bin/tokens.js   -> {"session_id":..., "tokens":N, "cost_usd":X, "at":...}
// The tracker appends a cumulative row per session after each turn, so the newest row is "now".
const fs = require('fs'), os = require('os'), path = require('path');
const f = path.join(os.homedir(), '.claude', 'metrics', 'costs.jsonl');
if (!fs.existsSync(f)) { console.log(JSON.stringify({ error: 'no cost log at ' + f })); process.exit(0); }
const rows = fs.readFileSync(f, 'utf8').split(/\r?\n/).filter(Boolean)
  .map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
const last = rows.reduce((a, r) => (!a || String(r.timestamp) > String(a.timestamp) ? r : a), null);
if (!last) { console.log(JSON.stringify({ error: 'cost log is empty' })); process.exit(0); }
const n = k => Number(last[k]) || 0;
console.log(JSON.stringify({
  session_id: last.session_id,
  tokens: n('input_tokens') + n('output_tokens') + n('cache_write_tokens'),
  cost_usd: Number(last.estimated_cost_usd) || 0,
  at: last.timestamp
}));
