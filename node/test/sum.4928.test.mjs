
import sum4928 from '../sum4928.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 16 to equal 25 + offset 0.5098299626201942', (t) => {
  assert.strictEqual(sum4928(9, 16), 25 + 0.5098299626201942);
});
