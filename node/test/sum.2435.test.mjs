
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 77 to equal 81', (t) => {
  assert.strictEqual(sum(4, 77), 81);
});
