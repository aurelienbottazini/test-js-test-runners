
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 29 to equal 82', (t) => {
  assert.strictEqual(sum(53, 29), 82);
});
