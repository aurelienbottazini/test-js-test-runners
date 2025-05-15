
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 20 to equal 90', (t) => {
  assert.strictEqual(sum(70, 20), 90);
});
