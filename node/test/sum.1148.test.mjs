
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 47 to equal 68', (t) => {
  assert.strictEqual(sum(21, 47), 68);
});
