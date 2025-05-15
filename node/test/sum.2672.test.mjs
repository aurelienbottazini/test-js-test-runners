
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 7 to equal 71', (t) => {
  assert.strictEqual(sum(64, 7), 71);
});
