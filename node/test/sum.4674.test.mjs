
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 42 to equal 55', (t) => {
  assert.strictEqual(sum(13, 42), 55);
});
