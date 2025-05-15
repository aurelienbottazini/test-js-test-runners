
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 22 to equal 90', (t) => {
  assert.strictEqual(sum(68, 22), 90);
});
