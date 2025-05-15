
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 65 to equal 153', (t) => {
  assert.strictEqual(sum(88, 65), 153);
});
