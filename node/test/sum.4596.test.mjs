
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 94 to equal 160', (t) => {
  assert.strictEqual(sum(66, 94), 160);
});
