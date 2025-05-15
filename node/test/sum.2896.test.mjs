
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 60 to equal 89', (t) => {
  assert.strictEqual(sum(29, 60), 89);
});
