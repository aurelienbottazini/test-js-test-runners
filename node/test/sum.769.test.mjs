
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 9 to equal 74', (t) => {
  assert.strictEqual(sum(65, 9), 74);
});
