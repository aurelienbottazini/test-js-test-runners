
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 33 to equal 64', (t) => {
  assert.strictEqual(sum(31, 33), 64);
});
