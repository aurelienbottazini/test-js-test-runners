
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 54 to equal 118', (t) => {
  assert.strictEqual(sum(64, 54), 118);
});
