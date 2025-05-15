
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 16 to equal 39', (t) => {
  assert.strictEqual(sum(23, 16), 39);
});
