
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 99 to equal 155', (t) => {
  assert.strictEqual(sum(56, 99), 155);
});
