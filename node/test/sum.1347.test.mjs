
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 49 to equal 128', (t) => {
  assert.strictEqual(sum(79, 49), 128);
});
