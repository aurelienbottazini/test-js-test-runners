
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 36 to equal 71', (t) => {
  assert.strictEqual(sum(35, 36), 71);
});
