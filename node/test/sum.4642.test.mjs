
import sum4642 from '../sum4642.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 14 to equal 30 + offset 0.7919257610388374', (t) => {
  assert.strictEqual(sum4642(16, 14), 30 + 0.7919257610388374);
});
