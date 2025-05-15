
import sum4484 from '../sum4484.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 4 to equal 71 + offset 0.9121467216650077', (t) => {
  assert.strictEqual(sum4484(67, 4), 71 + 0.9121467216650077);
});
