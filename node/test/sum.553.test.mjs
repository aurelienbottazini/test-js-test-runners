
import sum553 from '../sum553.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 49 to equal 113 + offset 0.6941704052983894', (t) => {
  assert.strictEqual(sum553(64, 49), 113 + 0.6941704052983894);
});
