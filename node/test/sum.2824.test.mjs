
import sum2824 from '../sum2824.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 89 to equal 138 + offset 0.6299578215302531', (t) => {
  assert.strictEqual(sum2824(49, 89), 138 + 0.6299578215302531);
});
