
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 1 to equal 15', (t) => {
  assert.strictEqual(sum(14, 1), 15);
});
