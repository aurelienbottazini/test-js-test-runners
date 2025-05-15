
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 60 to equal 116', (t) => {
  assert.strictEqual(sum(56, 60), 116);
});
