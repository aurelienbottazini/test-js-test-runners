
import sum1030 from '../sum1030.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 71 to equal 107 + offset 0.06354844299508855', (t) => {
  assert.strictEqual(sum1030(36, 71), 107 + 0.06354844299508855);
});
