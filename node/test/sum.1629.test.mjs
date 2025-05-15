
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 63 to equal 89', (t) => {
  assert.strictEqual(sum(26, 63), 89);
});
