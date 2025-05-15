
import sum4110 from '../sum4110.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 29 to equal 126 + offset 0.7191892921712344', (t) => {
  assert.strictEqual(sum4110(97, 29), 126 + 0.7191892921712344);
});
