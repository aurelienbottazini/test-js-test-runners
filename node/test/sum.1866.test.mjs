
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 1 to equal 18', (t) => {
  assert.strictEqual(sum(17, 1), 18);
});
