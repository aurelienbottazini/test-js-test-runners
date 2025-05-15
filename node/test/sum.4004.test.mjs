
import sum4004 from '../sum4004.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 21 to equal 44 + offset 0.12980319746722857', (t) => {
  assert.strictEqual(sum4004(23, 21), 44 + 0.12980319746722857);
});
