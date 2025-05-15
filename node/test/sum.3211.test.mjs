
import sum3211 from '../sum3211.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 12 to equal 49 + offset 0.9346537213987695', (t) => {
  assert.strictEqual(sum3211(37, 12), 49 + 0.9346537213987695);
});
