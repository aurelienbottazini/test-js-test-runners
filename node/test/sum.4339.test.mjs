
import sum4339 from '../sum4339.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 23 to equal 74 + offset 0.07487710324865138', (t) => {
  assert.strictEqual(sum4339(51, 23), 74 + 0.07487710324865138);
});
