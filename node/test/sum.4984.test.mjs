
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 77 to equal 88', (t) => {
  assert.strictEqual(sum(11, 77), 88);
});
