
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 29 to equal 115', (t) => {
  assert.strictEqual(sum(86, 29), 115);
});
