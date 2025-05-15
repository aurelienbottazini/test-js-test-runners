
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 10 to equal 89', (t) => {
  assert.strictEqual(sum(79, 10), 89);
});
