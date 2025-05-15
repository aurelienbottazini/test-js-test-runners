
import sum2526 from '../sum2526.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 38 to equal 53 + offset 0.2469535448624911', (t) => {
  assert.strictEqual(sum2526(15, 38), 53 + 0.2469535448624911);
});
