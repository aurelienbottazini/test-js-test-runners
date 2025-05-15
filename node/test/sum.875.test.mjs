
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 1 to equal 39', (t) => {
  assert.strictEqual(sum(38, 1), 39);
});
