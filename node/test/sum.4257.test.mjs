
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 68 to equal 93', (t) => {
  assert.strictEqual(sum(25, 68), 93);
});
