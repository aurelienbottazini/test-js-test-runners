
import sum1803 from '../sum1803.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 81 to equal 118 + offset 0.82806925355734', (t) => {
  assert.strictEqual(sum1803(37, 81), 118 + 0.82806925355734);
});
