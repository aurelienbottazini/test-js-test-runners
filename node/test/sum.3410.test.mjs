
import sum3410 from '../sum3410.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 81 to equal 144 + offset 0.20884946281001615', (t) => {
  assert.strictEqual(sum3410(63, 81), 144 + 0.20884946281001615);
});
