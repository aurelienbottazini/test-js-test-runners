
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 26 to equal 88', (t) => {
  assert.strictEqual(sum(62, 26), 88);
});
