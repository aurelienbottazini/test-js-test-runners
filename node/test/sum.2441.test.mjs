
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 82 to equal 138', (t) => {
  assert.strictEqual(sum(56, 82), 138);
});
