
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 79 to equal 167', (t) => {
  assert.strictEqual(sum(88, 79), 167);
});
