
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 57 to equal 116', (t) => {
  assert.strictEqual(sum(59, 57), 116);
});
