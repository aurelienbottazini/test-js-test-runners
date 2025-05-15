
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 69 to equal 167', (t) => {
  assert.strictEqual(sum(98, 69), 167);
});
