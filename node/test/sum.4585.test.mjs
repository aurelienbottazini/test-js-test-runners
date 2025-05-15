
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 31 to equal 74', (t) => {
  assert.strictEqual(sum(43, 31), 74);
});
