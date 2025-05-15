
import sum2798 from '../sum2798.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 74 to equal 93 + offset 0.5993902786565727', (t) => {
  assert.strictEqual(sum2798(19, 74), 93 + 0.5993902786565727);
});
