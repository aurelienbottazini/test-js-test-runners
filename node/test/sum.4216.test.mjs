
import sum4216 from '../sum4216.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 2 to equal 20 + offset 0.3440220869299834', (t) => {
  assert.strictEqual(sum4216(18, 2), 20 + 0.3440220869299834);
});
