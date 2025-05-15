
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 79 to equal 178', (t) => {
  assert.strictEqual(sum(99, 79), 178);
});
