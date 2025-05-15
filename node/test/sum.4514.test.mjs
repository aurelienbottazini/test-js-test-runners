
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 5 to equal 93', (t) => {
  assert.strictEqual(sum(88, 5), 93);
});
