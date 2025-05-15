
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 61 to equal 120', (t) => {
  assert.strictEqual(sum(59, 61), 120);
});
