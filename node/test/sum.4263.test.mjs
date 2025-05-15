
import sum4263 from '../sum4263.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 96 to equal 173 + offset 0.4155106959181103', (t) => {
  assert.strictEqual(sum4263(77, 96), 173 + 0.4155106959181103);
});
