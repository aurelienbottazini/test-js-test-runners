
import sum4714 from '../sum4714.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 31 to equal 120 + offset 0.9959196189030567', (t) => {
  assert.strictEqual(sum4714(89, 31), 120 + 0.9959196189030567);
});
