
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 70 to equal 138', (t) => {
  assert.strictEqual(sum(68, 70), 138);
});
