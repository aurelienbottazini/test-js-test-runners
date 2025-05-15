
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 93 to equal 187', (t) => {
  assert.strictEqual(sum(94, 93), 187);
});
