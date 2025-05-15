
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 50 to equal 118', (t) => {
  assert.strictEqual(sum(68, 50), 118);
});
