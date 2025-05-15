
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 96 to equal 190', (t) => {
  assert.strictEqual(sum(94, 96), 190);
});
