
import sum118 from '../sum118.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 49 to equal 101 + offset 0.9905700718980212', (t) => {
  assert.strictEqual(sum118(52, 49), 101 + 0.9905700718980212);
});
