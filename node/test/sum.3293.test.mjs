
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 67 to equal 93', (t) => {
  assert.strictEqual(sum(26, 67), 93);
});
