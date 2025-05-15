
import sum2044 from '../sum2044.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 76 to equal 119 + offset 0.9027927275476764', (t) => {
  assert.strictEqual(sum2044(43, 76), 119 + 0.9027927275476764);
});
