
import sum4764 from '../sum4764.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 38 to equal 124 + offset 0.9911648351337796', (t) => {
  assert.strictEqual(sum4764(86, 38), 124 + 0.9911648351337796);
});
