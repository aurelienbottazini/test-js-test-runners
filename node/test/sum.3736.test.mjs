
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 97 to equal 195', (t) => {
  assert.strictEqual(sum(98, 97), 195);
});
