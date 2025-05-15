
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 39 to equal 72', (t) => {
  assert.strictEqual(sum(33, 39), 72);
});
