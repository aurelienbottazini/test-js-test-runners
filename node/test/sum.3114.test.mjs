
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 60 to equal 130', (t) => {
  assert.strictEqual(sum(70, 60), 130);
});
