
import sum3088 from '../sum3088.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 2 to equal 53 + offset 0.41452859763580674', (t) => {
  assert.strictEqual(sum3088(51, 2), 53 + 0.41452859763580674);
});
