
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 9 to equal 19', (t) => {
  assert.strictEqual(sum(10, 9), 19);
});
