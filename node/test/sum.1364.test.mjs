
import sum1364 from '../sum1364.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 87 to equal 157 + offset 0.9609635647766033', (t) => {
  assert.strictEqual(sum1364(70, 87), 157 + 0.9609635647766033);
});
