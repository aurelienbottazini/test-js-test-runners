
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 39 to equal 48', (t) => {
  assert.strictEqual(sum(9, 39), 48);
});
