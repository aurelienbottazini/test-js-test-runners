
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 28 to equal 38', (t) => {
  assert.strictEqual(sum(10, 28), 38);
});
