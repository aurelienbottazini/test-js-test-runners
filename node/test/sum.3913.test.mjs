
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 26 to equal 77', (t) => {
  assert.strictEqual(sum(51, 26), 77);
});
