
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 66 to equal 68', (t) => {
  assert.strictEqual(sum(2, 66), 68);
});
