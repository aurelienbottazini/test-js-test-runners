
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 84 to equal 155', (t) => {
  assert.strictEqual(sum(71, 84), 155);
});
