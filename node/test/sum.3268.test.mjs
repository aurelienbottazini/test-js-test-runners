
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 77 to equal 106', (t) => {
  assert.strictEqual(sum(29, 77), 106);
});
