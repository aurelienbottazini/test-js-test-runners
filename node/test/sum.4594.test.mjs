
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 70 to equal 106', (t) => {
  assert.strictEqual(sum(36, 70), 106);
});
