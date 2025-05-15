
import sum1139 from '../sum1139.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 41 to equal 94 + offset 0.4671731687755545', (t) => {
  assert.strictEqual(sum1139(53, 41), 94 + 0.4671731687755545);
});
