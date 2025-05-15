
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 90 to equal 178', (t) => {
  assert.strictEqual(sum(88, 90), 178);
});
