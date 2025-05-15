
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 97 to equal 155', (t) => {
  assert.strictEqual(sum(58, 97), 155);
});
