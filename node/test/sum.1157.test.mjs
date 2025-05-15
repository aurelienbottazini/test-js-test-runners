
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 82 to equal 134', (t) => {
  assert.strictEqual(sum(52, 82), 134);
});
