
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 25 to equal 88', (t) => {
  assert.strictEqual(sum(63, 25), 88);
});
