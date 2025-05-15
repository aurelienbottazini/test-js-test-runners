
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 61 to equal 122', (t) => {
  assert.strictEqual(sum(61, 61), 122);
});
