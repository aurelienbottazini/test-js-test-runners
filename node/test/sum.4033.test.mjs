
import sum4033 from '../sum4033.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 11 to equal 108 + offset 0.48004455776453414', (t) => {
  assert.strictEqual(sum4033(97, 11), 108 + 0.48004455776453414);
});
