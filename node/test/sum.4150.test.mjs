
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 39 to equal 74', (t) => {
  assert.strictEqual(sum(35, 39), 74);
});
