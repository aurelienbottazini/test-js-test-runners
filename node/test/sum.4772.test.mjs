
import sum4772 from '../sum4772.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 51 to equal 108 + offset 0.4638449434500833', (t) => {
  assert.strictEqual(sum4772(57, 51), 108 + 0.4638449434500833);
});
