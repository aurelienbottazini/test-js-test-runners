
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 98 to equal 196', (t) => {
  assert.strictEqual(sum(98, 98), 196);
});
