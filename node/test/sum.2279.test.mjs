
import sum2279 from '../sum2279.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 26 to equal 61 + offset 0.8863745903870809', (t) => {
  assert.strictEqual(sum2279(35, 26), 61 + 0.8863745903870809);
});
