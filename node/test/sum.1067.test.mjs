
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 81 to equal 145', (t) => {
  assert.strictEqual(sum(64, 81), 145);
});
