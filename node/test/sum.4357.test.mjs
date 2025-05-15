
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 5 to equal 27', (t) => {
  assert.strictEqual(sum(22, 5), 27);
});
