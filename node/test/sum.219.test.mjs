
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 22 to equal 100', (t) => {
  assert.strictEqual(sum(78, 22), 100);
});
