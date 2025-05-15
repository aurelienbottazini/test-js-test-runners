
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 30 to equal 124', (t) => {
  assert.strictEqual(sum(94, 30), 124);
});
