
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 92 to equal 180', (t) => {
  assert.strictEqual(sum(88, 92), 180);
});
