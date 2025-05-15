
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 31 to equal 56', (t) => {
  assert.strictEqual(sum(25, 31), 56);
});
