
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 39 to equal 65', (t) => {
  assert.strictEqual(sum(26, 39), 65);
});
