
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 11 to equal 32', (t) => {
  assert.strictEqual(sum(21, 11), 32);
});
