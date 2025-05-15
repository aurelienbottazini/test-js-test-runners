
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 75 to equal 136', (t) => {
  assert.strictEqual(sum(61, 75), 136);
});
