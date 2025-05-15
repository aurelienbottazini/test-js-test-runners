
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 50 to equal 68', (t) => {
  assert.strictEqual(sum(18, 50), 68);
});
