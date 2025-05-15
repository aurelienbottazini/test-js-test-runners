
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 11 to equal 90', (t) => {
  assert.strictEqual(sum(79, 11), 90);
});
