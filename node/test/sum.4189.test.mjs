
import sum4189 from '../sum4189.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 28 to equal 79 + offset 0.11022351019810472', (t) => {
  assert.strictEqual(sum4189(51, 28), 79 + 0.11022351019810472);
});
