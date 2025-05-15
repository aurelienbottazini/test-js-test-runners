
import sum4126 from '../sum4126.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 87 to equal 95 + offset 0.9268264898927568', (t) => {
  assert.strictEqual(sum4126(8, 87), 95 + 0.9268264898927568);
});
