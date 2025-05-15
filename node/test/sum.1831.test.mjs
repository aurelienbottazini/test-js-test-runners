
import sum1831 from '../sum1831.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 39 to equal 60 + offset 0.4603767574772254', (t) => {
  assert.strictEqual(sum1831(21, 39), 60 + 0.4603767574772254);
});
