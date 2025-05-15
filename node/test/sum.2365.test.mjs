
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 26 to equal 99', (t) => {
  assert.strictEqual(sum(73, 26), 99);
});
