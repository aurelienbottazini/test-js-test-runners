
import sum4093 from '../sum4093.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 71 to equal 98 + offset 0.9321171176856436', (t) => {
  assert.strictEqual(sum4093(27, 71), 98 + 0.9321171176856436);
});
