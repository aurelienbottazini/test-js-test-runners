
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 15 to equal 74', (t) => {
  assert.strictEqual(sum(59, 15), 74);
});
