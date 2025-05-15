
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 59 to equal 74', (t) => {
  assert.strictEqual(sum(15, 59), 74);
});
