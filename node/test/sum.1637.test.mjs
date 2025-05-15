
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 22 to equal 47', (t) => {
  assert.strictEqual(sum(25, 22), 47);
});
