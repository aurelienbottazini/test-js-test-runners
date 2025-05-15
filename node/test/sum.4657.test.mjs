
import sum4657 from '../sum4657.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 22 to equal 34 + offset 0.6242360742855333', (t) => {
  assert.strictEqual(sum4657(12, 22), 34 + 0.6242360742855333);
});
