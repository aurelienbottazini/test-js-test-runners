
import sum1861 from '../sum1861.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 72 to equal 128 + offset 0.39379449431596725', (t) => {
  assert.strictEqual(sum1861(56, 72), 128 + 0.39379449431596725);
});
