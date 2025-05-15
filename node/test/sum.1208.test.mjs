
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 33 to equal 113', (t) => {
  assert.strictEqual(sum(80, 33), 113);
});
