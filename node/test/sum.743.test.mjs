
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 71 to equal 88', (t) => {
  assert.strictEqual(sum(17, 71), 88);
});
