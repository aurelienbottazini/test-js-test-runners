
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 0 to equal 77', (t) => {
  assert.strictEqual(sum(77, 0), 77);
});
