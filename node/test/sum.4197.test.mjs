
import sum4197 from '../sum4197.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 6 to equal 64 + offset 0.8212489292923575', (t) => {
  assert.strictEqual(sum4197(58, 6), 64 + 0.8212489292923575);
});
