
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 26 to equal 120', (t) => {
  assert.strictEqual(sum(94, 26), 120);
});
