
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 49 to equal 73', (t) => {
  assert.strictEqual(sum(24, 49), 73);
});
