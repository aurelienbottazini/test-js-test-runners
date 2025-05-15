
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 67 to equal 125', (t) => {
  assert.strictEqual(sum(58, 67), 125);
});
