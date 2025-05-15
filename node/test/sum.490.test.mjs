
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 47 to equal 124', (t) => {
  assert.strictEqual(sum(77, 47), 124);
});
