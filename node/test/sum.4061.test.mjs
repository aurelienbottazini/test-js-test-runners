
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 13 to equal 76', (t) => {
  assert.strictEqual(sum(63, 13), 76);
});
