
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 99 to equal 114', (t) => {
  assert.strictEqual(sum(15, 99), 114);
});
