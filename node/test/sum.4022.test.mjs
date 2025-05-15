
import sum4022 from '../sum4022.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 19 to equal 61 + offset 0.17608242561073473', (t) => {
  assert.strictEqual(sum4022(42, 19), 61 + 0.17608242561073473);
});
