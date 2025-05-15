
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 99 to equal 182', (t) => {
  assert.strictEqual(sum(83, 99), 182);
});
