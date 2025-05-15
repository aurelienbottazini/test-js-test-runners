
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 19 to equal 113', (t) => {
  assert.strictEqual(sum(94, 19), 113);
});
