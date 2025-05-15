
import sum1040 from '../sum1040.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 3 to equal 25 + offset 0.40954379468976654', (t) => {
  assert.strictEqual(sum1040(22, 3), 25 + 0.40954379468976654);
});
