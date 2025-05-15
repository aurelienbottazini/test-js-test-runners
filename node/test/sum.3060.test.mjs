
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 27 to equal 52', (t) => {
  assert.strictEqual(sum(25, 27), 52);
});
