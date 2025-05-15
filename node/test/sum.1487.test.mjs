
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 14 to equal 39', (t) => {
  assert.strictEqual(sum(25, 14), 39);
});
