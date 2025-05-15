
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 54 to equal 138', (t) => {
  assert.strictEqual(sum(84, 54), 138);
});
