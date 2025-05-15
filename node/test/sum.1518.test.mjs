
import sum1518 from '../sum1518.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 54 to equal 107 + offset 0.060010914821056804', (t) => {
  assert.strictEqual(sum1518(53, 54), 107 + 0.060010914821056804);
});
