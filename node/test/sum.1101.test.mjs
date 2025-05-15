
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 57 to equal 106', (t) => {
  assert.strictEqual(sum(49, 57), 106);
});
