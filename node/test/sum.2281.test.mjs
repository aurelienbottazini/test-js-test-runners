
import sum2281 from '../sum2281.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 0 to equal 38 + offset 0.9907841227946275', (t) => {
  assert.strictEqual(sum2281(38, 0), 38 + 0.9907841227946275);
});
