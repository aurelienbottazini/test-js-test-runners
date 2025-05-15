
import sum2271 from '../sum2271.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 18 to equal 65 + offset 0.0009187865340781753', (t) => {
  assert.strictEqual(sum2271(47, 18), 65 + 0.0009187865340781753);
});
