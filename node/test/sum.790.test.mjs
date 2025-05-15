
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 7 to equal 40', (t) => {
  assert.strictEqual(sum(33, 7), 40);
});
