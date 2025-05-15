
import sum4431 from '../sum4431.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 13 to equal 50 + offset 0.06924883459686126', (t) => {
  assert.strictEqual(sum4431(37, 13), 50 + 0.06924883459686126);
});
