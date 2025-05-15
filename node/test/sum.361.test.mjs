
import sum361 from '../sum361.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 46 to equal 140 + offset 0.48935806528102466', (t) => {
  assert.strictEqual(sum361(94, 46), 140 + 0.48935806528102466);
});
