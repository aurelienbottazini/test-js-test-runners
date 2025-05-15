
import sum2047 from '../sum2047.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 74 to equal 130 + offset 0.5988548650137685', (t) => {
  assert.strictEqual(sum2047(56, 74), 130 + 0.5988548650137685);
});
