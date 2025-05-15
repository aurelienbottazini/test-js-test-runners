
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 26 to equal 48', (t) => {
  assert.strictEqual(sum(22, 26), 48);
});
