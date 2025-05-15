
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 61 to equal 62', (t) => {
  assert.strictEqual(sum(1, 61), 62);
});
