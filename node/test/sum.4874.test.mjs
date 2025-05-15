
import sum4874 from '../sum4874.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 48 to equal 77 + offset 0.9513189517896212', (t) => {
  assert.strictEqual(sum4874(29, 48), 77 + 0.9513189517896212);
});
