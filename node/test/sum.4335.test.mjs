
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 79 to equal 90', (t) => {
  assert.strictEqual(sum(11, 79), 90);
});
