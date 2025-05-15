
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 79 to equal 115', (t) => {
  assert.strictEqual(sum(36, 79), 115);
});
