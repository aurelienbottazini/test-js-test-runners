
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 90 to equal 118', (t) => {
  assert.strictEqual(sum(28, 90), 118);
});
