
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 56 to equal 146', (t) => {
  assert.strictEqual(sum(90, 56), 146);
});
