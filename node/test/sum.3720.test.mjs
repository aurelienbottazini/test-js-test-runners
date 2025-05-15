
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 97 to equal 104', (t) => {
  assert.strictEqual(sum(7, 97), 104);
});
