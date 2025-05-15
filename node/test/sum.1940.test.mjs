
import sum1940 from '../sum1940.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 34 to equal 113 + offset 0.7722611831271757', (t) => {
  assert.strictEqual(sum1940(79, 34), 113 + 0.7722611831271757);
});
