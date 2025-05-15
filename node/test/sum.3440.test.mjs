
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 55 to equal 154', (t) => {
  assert.strictEqual(sum(99, 55), 154);
});
