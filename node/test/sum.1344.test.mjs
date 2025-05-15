
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 64 to equal 115', (t) => {
  assert.strictEqual(sum(51, 64), 115);
});
