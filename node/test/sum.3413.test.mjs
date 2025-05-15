
import sum3413 from '../sum3413.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 7 to equal 42 + offset 0.9401467720801505', (t) => {
  assert.strictEqual(sum3413(35, 7), 42 + 0.9401467720801505);
});
