
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 77 to equal 79', (t) => {
  assert.strictEqual(sum(2, 77), 79);
});
