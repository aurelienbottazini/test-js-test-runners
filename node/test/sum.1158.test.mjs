
import sum1158 from '../sum1158.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 75 to equal 157 + offset 0.8103945088612367', (t) => {
  assert.strictEqual(sum1158(82, 75), 157 + 0.8103945088612367);
});
