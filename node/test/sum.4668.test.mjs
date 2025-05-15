
import sum4668 from '../sum4668.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 95 to equal 125 + offset 0.9409691433909212', (t) => {
  assert.strictEqual(sum4668(30, 95), 125 + 0.9409691433909212);
});
