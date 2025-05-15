
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 79 to equal 128', (t) => {
  assert.strictEqual(sum(49, 79), 128);
});
