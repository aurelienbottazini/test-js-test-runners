
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 64 to equal 116', (t) => {
  assert.strictEqual(sum(52, 64), 116);
});
