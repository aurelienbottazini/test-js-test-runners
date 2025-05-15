
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 59 to equal 116', (t) => {
  assert.strictEqual(sum(57, 59), 116);
});
