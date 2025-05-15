
import sum2854 from '../sum2854.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 26 to equal 41 + offset 0.20364110108473432', (t) => {
  assert.strictEqual(sum2854(15, 26), 41 + 0.20364110108473432);
});
