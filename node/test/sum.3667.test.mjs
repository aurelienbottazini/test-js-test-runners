
import sum3667 from '../sum3667.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 35 to equal 134 + offset 0.3925515124285426', (t) => {
  assert.strictEqual(sum3667(99, 35), 134 + 0.3925515124285426);
});
