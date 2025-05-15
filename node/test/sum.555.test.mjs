
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 22 to equal 32', (t) => {
  assert.strictEqual(sum(10, 22), 32);
});
