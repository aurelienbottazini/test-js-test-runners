
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 88 to equal 155', (t) => {
  assert.strictEqual(sum(67, 88), 155);
});
