
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 93 to equal 178', (t) => {
  assert.strictEqual(sum(85, 93), 178);
});
