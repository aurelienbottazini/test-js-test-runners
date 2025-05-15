
import sum1922 from '../sum1922.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 82 to equal 134 + offset 0.36882806267530366', (t) => {
  assert.strictEqual(sum1922(52, 82), 134 + 0.36882806267530366);
});
