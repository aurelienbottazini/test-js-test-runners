
import sum4558 from '../sum4558.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 36 to equal 80 + offset 0.3212707625775034', (t) => {
  assert.strictEqual(sum4558(44, 36), 80 + 0.3212707625775034);
});
