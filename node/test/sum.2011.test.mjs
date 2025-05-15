
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 79 to equal 84', (t) => {
  assert.strictEqual(sum(5, 79), 84);
});
