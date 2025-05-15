
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 30 to equal 113', (t) => {
  assert.strictEqual(sum(83, 30), 113);
});
