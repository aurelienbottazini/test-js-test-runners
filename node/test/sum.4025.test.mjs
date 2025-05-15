
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 62 to equal 142', (t) => {
  assert.strictEqual(sum(80, 62), 142);
});
