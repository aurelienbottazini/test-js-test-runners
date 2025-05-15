
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 64 to equal 71', (t) => {
  assert.strictEqual(sum(7, 64), 71);
});
