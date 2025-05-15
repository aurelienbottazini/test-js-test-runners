
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 38 to equal 106', (t) => {
  assert.strictEqual(sum(68, 38), 106);
});
