
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 83 to equal 182', (t) => {
  assert.strictEqual(sum(99, 83), 182);
});
