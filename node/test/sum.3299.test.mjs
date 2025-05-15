
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 94 to equal 182', (t) => {
  assert.strictEqual(sum(88, 94), 182);
});
