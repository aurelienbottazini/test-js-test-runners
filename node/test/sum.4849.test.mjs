
import sum4849 from '../sum4849.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 44 to equal 101 + offset 0.8510108255155551', (t) => {
  assert.strictEqual(sum4849(57, 44), 101 + 0.8510108255155551);
});
