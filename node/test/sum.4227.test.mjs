
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 31 to equal 99', (t) => {
  assert.strictEqual(sum(68, 31), 99);
});
