
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 53 to equal 136', (t) => {
  assert.strictEqual(sum(83, 53), 136);
});
