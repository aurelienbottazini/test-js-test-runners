
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 22 to equal 25', (t) => {
  assert.strictEqual(sum(3, 22), 25);
});
