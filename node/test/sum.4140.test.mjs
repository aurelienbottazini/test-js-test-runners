
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 59 to equal 153', (t) => {
  assert.strictEqual(sum(94, 59), 153);
});
