
import sum2828 from '../sum2828.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 80 to equal 124 + offset 0.29378008455952', (t) => {
  assert.strictEqual(sum2828(44, 80), 124 + 0.29378008455952);
});
