
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 56 to equal 116', (t) => {
  assert.strictEqual(sum(60, 56), 116);
});
