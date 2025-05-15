
import sum1351 from '../sum1351.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 14 to equal 23 + offset 0.3114110766707352', (t) => {
  assert.strictEqual(sum1351(9, 14), 23 + 0.3114110766707352);
});
