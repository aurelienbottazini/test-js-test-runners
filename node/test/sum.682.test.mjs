
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 59 to equal 126', (t) => {
  assert.strictEqual(sum(67, 59), 126);
});
