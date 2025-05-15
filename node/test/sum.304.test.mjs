
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 5 to equal 74', (t) => {
  assert.strictEqual(sum(69, 5), 74);
});
