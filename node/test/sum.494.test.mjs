
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 19 to equal 22', (t) => {
  assert.strictEqual(sum(3, 19), 22);
});
