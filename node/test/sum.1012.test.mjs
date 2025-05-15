
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 43 to equal 62', (t) => {
  assert.strictEqual(sum(19, 43), 62);
});
