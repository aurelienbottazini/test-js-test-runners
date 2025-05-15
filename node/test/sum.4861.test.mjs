
import sum4861 from '../sum4861.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 38 to equal 69 + offset 0.8076288682241666', (t) => {
  assert.strictEqual(sum4861(31, 38), 69 + 0.8076288682241666);
});
