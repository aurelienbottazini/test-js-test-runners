
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 47 to equal 127', (t) => {
  assert.strictEqual(sum(80, 47), 127);
});
