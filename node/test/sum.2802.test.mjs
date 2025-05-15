
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 7 to equal 88', (t) => {
  assert.strictEqual(sum(81, 7), 88);
});
