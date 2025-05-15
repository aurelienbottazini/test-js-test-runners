
import sum1297 from '../sum1297.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 50 to equal 91 + offset 0.530572822631784', (t) => {
  assert.strictEqual(sum1297(41, 50), 91 + 0.530572822631784);
});
