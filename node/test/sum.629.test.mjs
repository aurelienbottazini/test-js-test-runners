
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 91 to equal 150', (t) => {
  assert.strictEqual(sum(59, 91), 150);
});
