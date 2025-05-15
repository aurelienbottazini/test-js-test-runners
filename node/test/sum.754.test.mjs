
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 34 to equal 103', (t) => {
  assert.strictEqual(sum(69, 34), 103);
});
