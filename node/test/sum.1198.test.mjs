
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 6 to equal 32', (t) => {
  assert.strictEqual(sum(26, 6), 32);
});
