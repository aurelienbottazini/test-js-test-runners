
import sum4429 from '../sum4429.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 61 to equal 129 + offset 0.517291393080021', (t) => {
  assert.strictEqual(sum4429(68, 61), 129 + 0.517291393080021);
});
