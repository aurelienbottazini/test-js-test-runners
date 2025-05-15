
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 79 to equal 89', (t) => {
  assert.strictEqual(sum(10, 79), 89);
});
