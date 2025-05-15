
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 62 to equal 79', (t) => {
  assert.strictEqual(sum(17, 62), 79);
});
