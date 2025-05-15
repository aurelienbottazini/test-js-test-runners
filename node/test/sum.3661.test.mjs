
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 29 to equal 126', (t) => {
  assert.strictEqual(sum(97, 29), 126);
});
