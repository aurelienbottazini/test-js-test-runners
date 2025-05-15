
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 1 to equal 22', (t) => {
  assert.strictEqual(sum(21, 1), 22);
});
