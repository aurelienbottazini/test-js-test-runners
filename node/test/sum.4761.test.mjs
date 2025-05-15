
import sum4761 from '../sum4761.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 13 to equal 90 + offset 0.41038388657050306', (t) => {
  assert.strictEqual(sum4761(77, 13), 90 + 0.41038388657050306);
});
