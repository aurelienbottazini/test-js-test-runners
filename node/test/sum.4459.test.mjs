
import sum4459 from '../sum4459.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 57 to equal 101 + offset 0.5757045092983942', (t) => {
  assert.strictEqual(sum4459(44, 57), 101 + 0.5757045092983942);
});
