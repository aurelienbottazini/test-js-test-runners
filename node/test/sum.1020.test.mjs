
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 64 to equal 74', (t) => {
  assert.strictEqual(sum(10, 64), 74);
});
