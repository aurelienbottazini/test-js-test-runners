
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 34 to equal 68', (t) => {
  assert.strictEqual(sum(34, 34), 68);
});
