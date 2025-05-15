
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 40 to equal 113', (t) => {
  assert.strictEqual(sum(73, 40), 113);
});
