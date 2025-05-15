
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 64 to equal 161', (t) => {
  assert.strictEqual(sum(97, 64), 161);
});
