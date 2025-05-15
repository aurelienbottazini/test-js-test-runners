
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 54 to equal 114', (t) => {
  assert.strictEqual(sum(60, 54), 114);
});
