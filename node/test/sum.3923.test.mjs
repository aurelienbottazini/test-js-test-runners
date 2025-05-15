
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 2 to equal 99', (t) => {
  assert.strictEqual(sum(97, 2), 99);
});
