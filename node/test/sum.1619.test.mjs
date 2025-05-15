
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 46 to equal 50', (t) => {
  assert.strictEqual(sum(4, 46), 50);
});
