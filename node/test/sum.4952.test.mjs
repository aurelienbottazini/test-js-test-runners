
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 79 to equal 159', (t) => {
  assert.strictEqual(sum(80, 79), 159);
});
