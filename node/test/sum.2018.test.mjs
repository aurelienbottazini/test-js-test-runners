
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 96 to equal 170', (t) => {
  assert.strictEqual(sum(74, 96), 170);
});
