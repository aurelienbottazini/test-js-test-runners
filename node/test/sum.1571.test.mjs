
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 79 to equal 118', (t) => {
  assert.strictEqual(sum(39, 79), 118);
});
