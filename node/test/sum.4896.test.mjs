
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 55 to equal 116', (t) => {
  assert.strictEqual(sum(61, 55), 116);
});
