
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 43 to equal 68', (t) => {
  assert.strictEqual(sum(25, 43), 68);
});
