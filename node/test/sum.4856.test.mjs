
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 53 to equal 116', (t) => {
  assert.strictEqual(sum(63, 53), 116);
});
