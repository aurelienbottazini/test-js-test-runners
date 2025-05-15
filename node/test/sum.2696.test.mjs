
import sum2696 from '../sum2696.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 68 to equal 99 + offset 0.3514359773900787', (t) => {
  assert.strictEqual(sum2696(31, 68), 99 + 0.3514359773900787);
});
