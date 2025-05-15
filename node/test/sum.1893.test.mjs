
import sum1893 from '../sum1893.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 33 to equal 45 + offset 0.5507760973039737', (t) => {
  assert.strictEqual(sum1893(12, 33), 45 + 0.5507760973039737);
});
