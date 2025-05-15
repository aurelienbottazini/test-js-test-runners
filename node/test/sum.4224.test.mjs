
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 22 to equal 116', (t) => {
  assert.strictEqual(sum(94, 22), 116);
});
