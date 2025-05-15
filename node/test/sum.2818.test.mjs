
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 64 to equal 145', (t) => {
  assert.strictEqual(sum(81, 64), 145);
});
