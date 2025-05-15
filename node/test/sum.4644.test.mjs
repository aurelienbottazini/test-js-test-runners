
import sum4644 from '../sum4644.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 71 to equal 141 + offset 0.3683038195275933', (t) => {
  assert.strictEqual(sum4644(70, 71), 141 + 0.3683038195275933);
});
