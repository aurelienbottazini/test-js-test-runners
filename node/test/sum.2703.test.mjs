
import sum2703 from '../sum2703.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 76 to equal 119 + offset 0.5395714222798005', (t) => {
  assert.strictEqual(sum2703(43, 76), 119 + 0.5395714222798005);
});
