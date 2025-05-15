
import sum1054 from '../sum1054.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 9 to equal 46 + offset 0.8331228057407113', (t) => {
  assert.strictEqual(sum1054(37, 9), 46 + 0.8331228057407113);
});
