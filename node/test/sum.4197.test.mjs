
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 90 to equal 186', (t) => {
  assert.strictEqual(sum(96, 90), 186);
});
