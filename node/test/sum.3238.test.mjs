
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 66 to equal 160', (t) => {
  assert.strictEqual(sum(94, 66), 160);
});
