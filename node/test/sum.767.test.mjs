
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 76 to equal 123', (t) => {
  assert.strictEqual(sum(47, 76), 123);
});
