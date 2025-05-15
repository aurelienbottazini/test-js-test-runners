
import sum941 from '../sum941.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 68 to equal 134 + offset 0.03758562288225209', (t) => {
  assert.strictEqual(sum941(66, 68), 134 + 0.03758562288225209);
});
