
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 30 to equal 127', (t) => {
  assert.strictEqual(sum(97, 30), 127);
});
