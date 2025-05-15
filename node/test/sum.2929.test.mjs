
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 51 to equal 63', (t) => {
  assert.strictEqual(sum(12, 51), 63);
});
