
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 47 to equal 138', (t) => {
  assert.strictEqual(sum(91, 47), 138);
});
