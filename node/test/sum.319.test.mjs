
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 61 to equal 158', (t) => {
  assert.strictEqual(sum(97, 61), 158);
});
