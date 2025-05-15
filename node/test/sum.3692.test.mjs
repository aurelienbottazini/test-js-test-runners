
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 83 to equal 136', (t) => {
  assert.strictEqual(sum(53, 83), 136);
});
