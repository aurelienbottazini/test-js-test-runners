
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 46 to equal 75', (t) => {
  assert.strictEqual(sum(29, 46), 75);
});
