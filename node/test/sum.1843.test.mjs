
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 79 to equal 168', (t) => {
  assert.strictEqual(sum(89, 79), 168);
});
