
import sum4830 from '../sum4830.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 64 to equal 143 + offset 0.5939412077044277', (t) => {
  assert.strictEqual(sum4830(79, 64), 143 + 0.5939412077044277);
});
