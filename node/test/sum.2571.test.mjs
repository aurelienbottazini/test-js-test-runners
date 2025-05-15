
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 53 to equal 113', (t) => {
  assert.strictEqual(sum(60, 53), 113);
});
