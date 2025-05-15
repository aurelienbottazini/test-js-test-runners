
import sum1498 from '../sum1498.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 74 to equal 167 + offset 0.488795636815046', (t) => {
  assert.strictEqual(sum1498(93, 74), 167 + 0.488795636815046);
});
