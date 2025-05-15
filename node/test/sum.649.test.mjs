
import sum649 from '../sum649.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 56 to equal 152 + offset 0.24293307639464878', (t) => {
  assert.strictEqual(sum649(96, 56), 152 + 0.24293307639464878);
});
