
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 58 to equal 64', (t) => {
  assert.strictEqual(sum(6, 58), 64);
});
