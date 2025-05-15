
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 88 to equal 150', (t) => {
  assert.strictEqual(sum(62, 88), 150);
});
