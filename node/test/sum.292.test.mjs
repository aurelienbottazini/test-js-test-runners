
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 59 to equal 63', (t) => {
  assert.strictEqual(sum(4, 59), 63);
});
