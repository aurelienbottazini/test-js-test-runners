
import sum3042 from '../sum3042.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 79 to equal 87 + offset 0.6030663554410711', (t) => {
  assert.strictEqual(sum3042(8, 79), 87 + 0.6030663554410711);
});
