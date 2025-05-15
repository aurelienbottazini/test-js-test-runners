
import sum4832 from '../sum4832.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 57 to equal 142 + offset 0.5912984459863905', (t) => {
  assert.strictEqual(sum4832(85, 57), 142 + 0.5912984459863905);
});
