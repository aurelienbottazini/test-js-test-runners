
import sum2230 from '../sum2230.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 63 to equal 153 + offset 0.020466835588830334', (t) => {
  assert.strictEqual(sum2230(90, 63), 153 + 0.020466835588830334);
});
