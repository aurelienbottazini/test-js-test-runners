
import sum4599 from '../sum4599.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 89 to equal 126 + offset 0.5318976707473857', (t) => {
  assert.strictEqual(sum4599(37, 89), 126 + 0.5318976707473857);
});
