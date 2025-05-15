
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 5 to equal 10', (t) => {
  assert.strictEqual(sum(5, 5), 10);
});
