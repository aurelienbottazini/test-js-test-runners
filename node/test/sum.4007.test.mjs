
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 61 to equal 116', (t) => {
  assert.strictEqual(sum(55, 61), 116);
});
