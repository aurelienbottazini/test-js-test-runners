
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 21 to equal 112', (t) => {
  assert.strictEqual(sum(91, 21), 112);
});
