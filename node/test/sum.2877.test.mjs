
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 64 to equal 125', (t) => {
  assert.strictEqual(sum(61, 64), 125);
});
