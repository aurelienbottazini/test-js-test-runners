
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 41 to equal 138', (t) => {
  assert.strictEqual(sum(97, 41), 138);
});
