
import sum2984 from '../sum2984.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 73 to equal 162 + offset 0.2597679020517615', (t) => {
  assert.strictEqual(sum2984(89, 73), 162 + 0.2597679020517615);
});
