
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 76 to equal 173', (t) => {
  assert.strictEqual(sum(97, 76), 173);
});
