
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 88 to equal 168', (t) => {
  assert.strictEqual(sum(80, 88), 168);
});
