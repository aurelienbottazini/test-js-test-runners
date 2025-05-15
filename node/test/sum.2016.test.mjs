
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 83 to equal 159', (t) => {
  assert.strictEqual(sum(76, 83), 159);
});
