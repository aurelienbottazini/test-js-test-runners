
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 61 to equal 90', (t) => {
  assert.strictEqual(sum(29, 61), 90);
});
