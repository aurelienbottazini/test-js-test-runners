
import sum4487 from '../sum4487.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 55 to equal 67 + offset 0.9973922149858906', (t) => {
  assert.strictEqual(sum4487(12, 55), 67 + 0.9973922149858906);
});
