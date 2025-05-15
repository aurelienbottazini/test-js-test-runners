
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 59 to equal 71', (t) => {
  assert.strictEqual(sum(12, 59), 71);
});
