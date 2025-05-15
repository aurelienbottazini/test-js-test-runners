
import sum1548 from '../sum1548.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 68 to equal 134 + offset 0.03358364688996318', (t) => {
  assert.strictEqual(sum1548(66, 68), 134 + 0.03358364688996318);
});
