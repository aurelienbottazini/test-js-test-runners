
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 62 to equal 67', (t) => {
  assert.strictEqual(sum(5, 62), 67);
});
