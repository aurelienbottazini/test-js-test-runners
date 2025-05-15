
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 75 to equal 113', (t) => {
  assert.strictEqual(sum(38, 75), 113);
});
