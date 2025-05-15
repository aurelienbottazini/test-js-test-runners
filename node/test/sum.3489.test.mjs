
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 28 to equal 33', (t) => {
  assert.strictEqual(sum(5, 28), 33);
});
