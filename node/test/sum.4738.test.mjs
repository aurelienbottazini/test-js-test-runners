
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 14 to equal 103', (t) => {
  assert.strictEqual(sum(89, 14), 103);
});
