
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 94 to equal 185', (t) => {
  assert.strictEqual(sum(91, 94), 185);
});
