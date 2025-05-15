
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 72 to equal 112', (t) => {
  assert.strictEqual(sum(40, 72), 112);
});
