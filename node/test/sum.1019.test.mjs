
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 69 to equal 159', (t) => {
  assert.strictEqual(sum(90, 69), 159);
});
