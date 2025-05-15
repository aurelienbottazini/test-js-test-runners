
import sum1106 from '../sum1106.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 52 to equal 78 + offset 0.10481320090661417', (t) => {
  assert.strictEqual(sum1106(26, 52), 78 + 0.10481320090661417);
});
