
import sum2645 from '../sum2645.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 72 to equal 170 + offset 0.22503799100361144', (t) => {
  assert.strictEqual(sum2645(98, 72), 170 + 0.22503799100361144);
});
