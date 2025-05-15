
import sum4382 from '../sum4382.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 94 to equal 192 + offset 0.30003562771237857', (t) => {
  assert.strictEqual(sum4382(98, 94), 192 + 0.30003562771237857);
});
