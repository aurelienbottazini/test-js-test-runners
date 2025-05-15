
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 8 to equal 68', (t) => {
  assert.strictEqual(sum(60, 8), 68);
});
