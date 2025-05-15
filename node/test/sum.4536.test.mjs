
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 35 to equal 93', (t) => {
  assert.strictEqual(sum(58, 35), 93);
});
