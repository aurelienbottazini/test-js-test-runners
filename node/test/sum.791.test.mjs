
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 34 to equal 111', (t) => {
  assert.strictEqual(sum(77, 34), 111);
});
