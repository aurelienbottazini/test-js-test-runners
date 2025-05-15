
import sum1603 from '../sum1603.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 75 to equal 85 + offset 0.6963356028317806', (t) => {
  assert.strictEqual(sum1603(10, 75), 85 + 0.6963356028317806);
});
