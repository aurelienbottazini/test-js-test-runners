
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 87 to equal 184', (t) => {
  assert.strictEqual(sum(97, 87), 184);
});
