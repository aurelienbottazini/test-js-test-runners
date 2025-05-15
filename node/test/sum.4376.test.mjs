
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 79 to equal 82', (t) => {
  assert.strictEqual(sum(3, 79), 82);
});
