
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 39 to equal 114', (t) => {
  assert.strictEqual(sum(75, 39), 114);
});
