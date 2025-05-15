
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 75 to equal 159', (t) => {
  assert.strictEqual(sum(84, 75), 159);
});
