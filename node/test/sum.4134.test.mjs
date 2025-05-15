
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 94 to equal 126', (t) => {
  assert.strictEqual(sum(32, 94), 126);
});
