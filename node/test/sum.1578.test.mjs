
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 97 to equal 162', (t) => {
  assert.strictEqual(sum(65, 97), 162);
});
