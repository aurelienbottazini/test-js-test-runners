
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 29 to equal 32', (t) => {
  assert.strictEqual(sum(3, 29), 32);
});
