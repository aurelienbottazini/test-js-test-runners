
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 4 to equal 84', (t) => {
  assert.strictEqual(sum(80, 4), 84);
});
