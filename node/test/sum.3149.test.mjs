
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 62 to equal 62', (t) => {
  assert.strictEqual(sum(0, 62), 62);
});
