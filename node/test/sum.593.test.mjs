
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 48 to equal 124', (t) => {
  assert.strictEqual(sum(76, 48), 124);
});
