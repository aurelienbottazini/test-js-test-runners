
import sum3338 from '../sum3338.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 55 to equal 97 + offset 0.7990302042905676', (t) => {
  assert.strictEqual(sum3338(42, 55), 97 + 0.7990302042905676);
});
