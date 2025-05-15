
import sum4910 from '../sum4910.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 21 to equal 56 + offset 0.15700164661455118', (t) => {
  assert.strictEqual(sum4910(35, 21), 56 + 0.15700164661455118);
});
