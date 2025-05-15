
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 89 to equal 155', (t) => {
  assert.strictEqual(sum(66, 89), 155);
});
