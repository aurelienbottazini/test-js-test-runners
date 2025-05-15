
import sum2975 from '../sum2975.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 12 to equal 64 + offset 0.32706760826361214', (t) => {
  assert.strictEqual(sum2975(52, 12), 64 + 0.32706760826361214);
});
