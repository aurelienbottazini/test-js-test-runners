
import sum2393 from '../sum2393.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 66 to equal 149 + offset 0.013292610028844631', (t) => {
  assert.strictEqual(sum2393(83, 66), 149 + 0.013292610028844631);
});
