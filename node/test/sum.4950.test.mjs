
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 62 to equal 150', (t) => {
  assert.strictEqual(sum(88, 62), 150);
});
