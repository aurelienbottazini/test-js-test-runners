
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 97 to equal 136', (t) => {
  assert.strictEqual(sum(39, 97), 136);
});
