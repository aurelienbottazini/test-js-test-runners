
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 98 to equal 155', (t) => {
  assert.strictEqual(sum(57, 98), 155);
});
