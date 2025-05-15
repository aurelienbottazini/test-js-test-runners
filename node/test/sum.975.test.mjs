
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 46 to equal 95', (t) => {
  assert.strictEqual(sum(49, 46), 95);
});
