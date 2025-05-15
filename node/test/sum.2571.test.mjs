
import sum2571 from '../sum2571.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 59 to equal 142 + offset 0.5852210339626095', (t) => {
  assert.strictEqual(sum2571(83, 59), 142 + 0.5852210339626095);
});
