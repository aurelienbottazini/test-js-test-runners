
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 7 to equal 104', (t) => {
  assert.strictEqual(sum(97, 7), 104);
});
