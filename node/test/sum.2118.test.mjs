
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 15 to equal 32', (t) => {
  assert.strictEqual(sum(17, 15), 32);
});
