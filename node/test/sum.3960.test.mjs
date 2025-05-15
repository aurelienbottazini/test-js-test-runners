
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 97 to equal 196', (t) => {
  assert.strictEqual(sum(99, 97), 196);
});
