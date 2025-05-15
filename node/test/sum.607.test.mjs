
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 20 to equal 63', (t) => {
  assert.strictEqual(sum(43, 20), 63);
});
