
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 99 to equal 113', (t) => {
  assert.strictEqual(sum(14, 99), 113);
});
