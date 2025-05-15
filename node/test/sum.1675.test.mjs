
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 13 to equal 74', (t) => {
  assert.strictEqual(sum(61, 13), 74);
});
