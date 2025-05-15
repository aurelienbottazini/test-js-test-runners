
import sum3915 from '../sum3915.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 58 to equal 133 + offset 0.5598258789053764', (t) => {
  assert.strictEqual(sum3915(75, 58), 133 + 0.5598258789053764);
});
