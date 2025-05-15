
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 29 to equal 67', (t) => {
  assert.strictEqual(sum(38, 29), 67);
});
