
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 87 to equal 186', (t) => {
  assert.strictEqual(sum(99, 87), 186);
});
