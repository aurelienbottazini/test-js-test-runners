
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 53 to equal 82', (t) => {
  assert.strictEqual(sum(29, 53), 82);
});
