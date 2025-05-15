
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 39 to equal 50', (t) => {
  assert.strictEqual(sum(11, 39), 50);
});
