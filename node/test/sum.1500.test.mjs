
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 61 to equal 82', (t) => {
  assert.strictEqual(sum(21, 61), 82);
});
