
import sum2884 from '../sum2884.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 38 to equal 68 + offset 0.6194625724129676', (t) => {
  assert.strictEqual(sum2884(30, 38), 68 + 0.6194625724129676);
});
