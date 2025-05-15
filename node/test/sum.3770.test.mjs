
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 17 to equal 88', (t) => {
  assert.strictEqual(sum(71, 17), 88);
});
