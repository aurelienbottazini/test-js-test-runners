
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 91 to equal 179', (t) => {
  assert.strictEqual(sum(88, 91), 179);
});
