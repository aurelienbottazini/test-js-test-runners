
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 32 to equal 84', (t) => {
  assert.strictEqual(sum(52, 32), 84);
});
