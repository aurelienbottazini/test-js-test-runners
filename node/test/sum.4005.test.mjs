
import sum4005 from '../sum4005.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 6 to equal 53 + offset 0.21578626327978578', (t) => {
  assert.strictEqual(sum4005(47, 6), 53 + 0.21578626327978578);
});
