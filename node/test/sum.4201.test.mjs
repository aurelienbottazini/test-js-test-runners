
import sum4201 from '../sum4201.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 87 to equal 107 + offset 0.09900998473204337', (t) => {
  assert.strictEqual(sum4201(20, 87), 107 + 0.09900998473204337);
});
