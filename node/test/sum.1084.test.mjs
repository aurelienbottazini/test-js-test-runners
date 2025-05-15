
import sum1084 from '../sum1084.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 12 to equal 75 + offset 0.5051940966293704', (t) => {
  assert.strictEqual(sum1084(63, 12), 75 + 0.5051940966293704);
});
