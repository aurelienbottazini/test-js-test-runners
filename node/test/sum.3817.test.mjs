
import sum3817 from '../sum3817.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 28 to equal 100 + offset 0.7943166767985727', (t) => {
  assert.strictEqual(sum3817(72, 28), 100 + 0.7943166767985727);
});
