
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 89 to equal 93', (t) => {
  assert.strictEqual(sum(4, 89), 93);
});
