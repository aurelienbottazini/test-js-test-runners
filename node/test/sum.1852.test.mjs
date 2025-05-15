
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 49 to equal 127', (t) => {
  assert.strictEqual(sum(78, 49), 127);
});
