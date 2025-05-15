
import sum4893 from '../sum4893.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 52 to equal 79 + offset 0.7147048064842676', (t) => {
  assert.strictEqual(sum4893(27, 52), 79 + 0.7147048064842676);
});
