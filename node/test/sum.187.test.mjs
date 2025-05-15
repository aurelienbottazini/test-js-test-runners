
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 72 to equal 134', (t) => {
  assert.strictEqual(sum(62, 72), 134);
});
