
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 43 to equal 127', (t) => {
  assert.strictEqual(sum(84, 43), 127);
});
