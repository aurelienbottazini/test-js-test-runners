
import sum3146 from '../sum3146.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 98 to equal 132 + offset 0.19030232229673316', (t) => {
  assert.strictEqual(sum3146(34, 98), 132 + 0.19030232229673316);
});
