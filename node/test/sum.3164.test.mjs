
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 5 to equal 38', (t) => {
  assert.strictEqual(sum(33, 5), 38);
});
