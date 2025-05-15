
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 17 to equal 106', (t) => {
  assert.strictEqual(sum(89, 17), 106);
});
