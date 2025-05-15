
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 94 to equal 116', (t) => {
  assert.strictEqual(sum(22, 94), 116);
});
