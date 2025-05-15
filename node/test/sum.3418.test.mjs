
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 64 to equal 85', (t) => {
  assert.strictEqual(sum(21, 64), 85);
});
