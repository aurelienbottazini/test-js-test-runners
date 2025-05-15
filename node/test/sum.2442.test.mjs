
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 26 to equal 67', (t) => {
  assert.strictEqual(sum(41, 26), 67);
});
