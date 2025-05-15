
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 53 to equal 126', (t) => {
  assert.strictEqual(sum(73, 53), 126);
});
