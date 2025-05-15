
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 33 to equal 111', (t) => {
  assert.strictEqual(sum(78, 33), 111);
});
