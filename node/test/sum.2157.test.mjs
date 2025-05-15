
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 53 to equal 150', (t) => {
  assert.strictEqual(sum(97, 53), 150);
});
