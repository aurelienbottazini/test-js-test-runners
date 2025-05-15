
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 68 to equal 138', (t) => {
  assert.strictEqual(sum(70, 68), 138);
});
