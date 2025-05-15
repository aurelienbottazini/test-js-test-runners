
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 4 to equal 63', (t) => {
  assert.strictEqual(sum(59, 4), 63);
});
