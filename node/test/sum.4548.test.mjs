
import sum4548 from '../sum4548.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 95 to equal 123 + offset 0.2852883314601079', (t) => {
  assert.strictEqual(sum4548(28, 95), 123 + 0.2852883314601079);
});
