
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 22 to equal 113', (t) => {
  assert.strictEqual(sum(91, 22), 113);
});
