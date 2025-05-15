
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 11 to equal 99', (t) => {
  assert.strictEqual(sum(88, 11), 99);
});
