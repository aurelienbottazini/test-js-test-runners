
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 37 to equal 39', (t) => {
  assert.strictEqual(sum(2, 37), 39);
});
