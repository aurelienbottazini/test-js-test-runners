
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 6 to equal 100', (t) => {
  assert.strictEqual(sum(94, 6), 100);
});
