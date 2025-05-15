
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 76 to equal 127', (t) => {
  assert.strictEqual(sum(51, 76), 127);
});
