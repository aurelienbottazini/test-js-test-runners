
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 42 to equal 136', (t) => {
  assert.strictEqual(sum(94, 42), 136);
});
