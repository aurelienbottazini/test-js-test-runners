
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 83 to equal 102', (t) => {
  assert.strictEqual(sum(19, 83), 102);
});
