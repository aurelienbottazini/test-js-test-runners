
import sum2575 from '../sum2575.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 9 to equal 27 + offset 0.9170567829889967', (t) => {
  assert.strictEqual(sum2575(18, 9), 27 + 0.9170567829889967);
});
