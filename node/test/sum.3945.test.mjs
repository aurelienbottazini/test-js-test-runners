
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 23 to equal 25', (t) => {
  assert.strictEqual(sum(2, 23), 25);
});
