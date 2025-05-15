
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 29 to equal 106', (t) => {
  assert.strictEqual(sum(77, 29), 106);
});
