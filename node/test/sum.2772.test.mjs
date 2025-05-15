
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 97 to equal 135', (t) => {
  assert.strictEqual(sum(38, 97), 135);
});
