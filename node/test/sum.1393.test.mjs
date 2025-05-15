
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 86 to equal 115', (t) => {
  assert.strictEqual(sum(29, 86), 115);
});
