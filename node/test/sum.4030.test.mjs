
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 69 to equal 89', (t) => {
  assert.strictEqual(sum(20, 69), 89);
});
