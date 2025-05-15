
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 84 to equal 103', (t) => {
  assert.strictEqual(sum(19, 84), 103);
});
