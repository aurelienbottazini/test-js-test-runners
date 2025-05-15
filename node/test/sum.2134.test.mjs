
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 16 to equal 110', (t) => {
  assert.strictEqual(sum(94, 16), 110);
});
