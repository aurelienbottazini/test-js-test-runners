
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 33 to equal 106', (t) => {
  assert.strictEqual(sum(73, 33), 106);
});
