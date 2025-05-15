
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 10 to equal 48', (t) => {
  assert.strictEqual(sum(38, 10), 48);
});
