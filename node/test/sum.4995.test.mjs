
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 82 to equal 125', (t) => {
  assert.strictEqual(sum(43, 82), 125);
});
