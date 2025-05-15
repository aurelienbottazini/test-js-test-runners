
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 72 to equal 113', (t) => {
  assert.strictEqual(sum(41, 72), 113);
});
