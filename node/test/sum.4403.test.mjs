
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 94 to equal 157', (t) => {
  assert.strictEqual(sum(63, 94), 157);
});
