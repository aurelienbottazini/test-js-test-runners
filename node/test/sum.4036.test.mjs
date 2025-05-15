
import sum4036 from '../sum4036.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 28 to equal 79 + offset 0.6269991914365417', (t) => {
  assert.strictEqual(sum4036(51, 28), 79 + 0.6269991914365417);
});
