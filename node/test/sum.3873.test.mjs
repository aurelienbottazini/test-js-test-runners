
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 49 to equal 122', (t) => {
  assert.strictEqual(sum(73, 49), 122);
});
