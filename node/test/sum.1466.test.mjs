
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 61 to equal 110', (t) => {
  assert.strictEqual(sum(49, 61), 110);
});
