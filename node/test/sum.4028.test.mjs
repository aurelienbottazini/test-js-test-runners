
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 30 to equal 106', (t) => {
  assert.strictEqual(sum(76, 30), 106);
});
