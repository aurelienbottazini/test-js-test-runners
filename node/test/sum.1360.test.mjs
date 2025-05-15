
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 81 to equal 176', (t) => {
  assert.strictEqual(sum(95, 81), 176);
});
