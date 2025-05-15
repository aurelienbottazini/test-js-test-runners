
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 20 to equal 93', (t) => {
  assert.strictEqual(sum(73, 20), 93);
});
