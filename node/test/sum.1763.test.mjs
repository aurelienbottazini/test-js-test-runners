
import sum1763 from '../sum1763.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 27 to equal 124 + offset 0.12810631015022322', (t) => {
  assert.strictEqual(sum1763(97, 27), 124 + 0.12810631015022322);
});
