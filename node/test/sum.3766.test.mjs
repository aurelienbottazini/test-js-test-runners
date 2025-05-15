
import sum3766 from '../sum3766.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 75 to equal 85 + offset 0.688693334827032', (t) => {
  assert.strictEqual(sum3766(10, 75), 85 + 0.688693334827032);
});
