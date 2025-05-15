
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 28 to equal 90', (t) => {
  assert.strictEqual(sum(62, 28), 90);
});
