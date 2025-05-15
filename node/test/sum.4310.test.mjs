
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 37 to equal 113', (t) => {
  assert.strictEqual(sum(76, 37), 113);
});
