
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 93 to equal 160', (t) => {
  assert.strictEqual(sum(67, 93), 160);
});
