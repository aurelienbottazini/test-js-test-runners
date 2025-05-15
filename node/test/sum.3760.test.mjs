
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 94 to equal 159', (t) => {
  assert.strictEqual(sum(65, 94), 159);
});
