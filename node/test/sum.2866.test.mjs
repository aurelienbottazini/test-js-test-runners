
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 77 to equal 125', (t) => {
  assert.strictEqual(sum(48, 77), 125);
});
