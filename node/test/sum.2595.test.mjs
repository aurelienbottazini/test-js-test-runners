
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 26 to equal 86', (t) => {
  assert.strictEqual(sum(60, 26), 86);
});
