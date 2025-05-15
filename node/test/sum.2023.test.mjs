
import sum2023 from '../sum2023.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 41 to equal 49 + offset 0.44898236462165575', (t) => {
  assert.strictEqual(sum2023(8, 41), 49 + 0.44898236462165575);
});
