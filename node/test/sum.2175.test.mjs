
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 70 to equal 113', (t) => {
  assert.strictEqual(sum(43, 70), 113);
});
