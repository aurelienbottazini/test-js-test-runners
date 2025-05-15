
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 22 to equal 31', (t) => {
  assert.strictEqual(sum(9, 22), 31);
});
