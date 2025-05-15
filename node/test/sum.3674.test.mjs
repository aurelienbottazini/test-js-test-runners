
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 51 to equal 145', (t) => {
  assert.strictEqual(sum(94, 51), 145);
});
