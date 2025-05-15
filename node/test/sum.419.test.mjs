
import sum419 from '../sum419.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 4 to equal 65 + offset 0.5359170580477285', (t) => {
  assert.strictEqual(sum419(61, 4), 65 + 0.5359170580477285);
});
