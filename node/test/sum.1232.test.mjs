
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 88 to equal 99', (t) => {
  assert.strictEqual(sum(11, 88), 99);
});
