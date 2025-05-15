
import sum4396 from '../sum4396.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 36 to equal 39 + offset 0.13683098003836447', (t) => {
  assert.strictEqual(sum4396(3, 36), 39 + 0.13683098003836447);
});
