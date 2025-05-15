
import sum576 from '../sum576.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 91 to equal 178 + offset 0.6111505730092736', (t) => {
  assert.strictEqual(sum576(87, 91), 178 + 0.6111505730092736);
});
