
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 31 to equal 64', (t) => {
  assert.strictEqual(sum(33, 31), 64);
});
