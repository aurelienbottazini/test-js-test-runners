
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 95 to equal 193', (t) => {
  assert.strictEqual(sum(98, 95), 193);
});
