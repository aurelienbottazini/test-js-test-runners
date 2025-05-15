
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 24 to equal 93', (t) => {
  assert.strictEqual(sum(69, 24), 93);
});
