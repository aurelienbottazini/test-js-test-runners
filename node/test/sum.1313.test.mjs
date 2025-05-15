
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 75 to equal 140', (t) => {
  assert.strictEqual(sum(65, 75), 140);
});
