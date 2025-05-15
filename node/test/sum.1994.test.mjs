
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 92 to equal 153', (t) => {
  assert.strictEqual(sum(61, 92), 153);
});
