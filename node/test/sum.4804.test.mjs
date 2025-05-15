
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 26 to equal 118', (t) => {
  assert.strictEqual(sum(92, 26), 118);
});
