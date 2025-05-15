
import sum4686 from '../sum4686.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 5 to equal 6 + offset 0.9423545580472494', (t) => {
  assert.strictEqual(sum4686(1, 5), 6 + 0.9423545580472494);
});
