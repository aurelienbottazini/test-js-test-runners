
import sum3298 from '../sum3298.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 45 to equal 136 + offset 0.13828441314782336', (t) => {
  assert.strictEqual(sum3298(91, 45), 136 + 0.13828441314782336);
});
