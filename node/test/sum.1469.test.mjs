
import sum1469 from '../sum1469.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 7 to equal 71 + offset 0.6814004300577776', (t) => {
  assert.strictEqual(sum1469(64, 7), 71 + 0.6814004300577776);
});
