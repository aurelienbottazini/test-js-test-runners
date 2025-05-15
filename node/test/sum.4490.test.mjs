
import sum4490 from '../sum4490.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 80 to equal 137 + offset 0.5793947915892147', (t) => {
  assert.strictEqual(sum4490(57, 80), 137 + 0.5793947915892147);
});
