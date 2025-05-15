
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 77 to equal 176', (t) => {
  assert.strictEqual(sum(99, 77), 176);
});
