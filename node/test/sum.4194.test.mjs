
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 63 to equal 103', (t) => {
  assert.strictEqual(sum(40, 63), 103);
});
