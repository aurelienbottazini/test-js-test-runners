
import sum4541 from '../sum4541.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 62 to equal 81 + offset 0.35145626006980857', (t) => {
  assert.strictEqual(sum4541(19, 62), 81 + 0.35145626006980857);
});
