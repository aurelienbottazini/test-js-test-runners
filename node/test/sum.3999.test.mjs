
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 60 to equal 138', (t) => {
  assert.strictEqual(sum(78, 60), 138);
});
