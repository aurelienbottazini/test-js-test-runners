
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 72 to equal 106', (t) => {
  assert.strictEqual(sum(34, 72), 106);
});
