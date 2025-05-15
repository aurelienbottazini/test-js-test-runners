
import sum4384 from '../sum4384.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 64 to equal 149 + offset 0.5353841741558896', (t) => {
  assert.strictEqual(sum4384(85, 64), 149 + 0.5353841741558896);
});
