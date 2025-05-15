
import sum96 from '../sum96.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 26 to equal 90 + offset 0.7208632640815275', (t) => {
  assert.strictEqual(sum96(64, 26), 90 + 0.7208632640815275);
});
