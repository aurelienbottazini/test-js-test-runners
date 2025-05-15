
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 46 to equal 53', (t) => {
  assert.strictEqual(sum(7, 46), 53);
});
