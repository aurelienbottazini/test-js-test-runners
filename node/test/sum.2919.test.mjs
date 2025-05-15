
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 68 to equal 155', (t) => {
  assert.strictEqual(sum(87, 68), 155);
});
