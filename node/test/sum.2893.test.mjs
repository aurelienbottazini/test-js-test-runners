
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 77 to equal 170', (t) => {
  assert.strictEqual(sum(93, 77), 170);
});
