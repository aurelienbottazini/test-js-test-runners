
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 86 to equal 175', (t) => {
  assert.strictEqual(sum(89, 86), 175);
});
