
import sum3617 from '../sum3617.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 90 to equal 157 + offset 0.1769561052481179', (t) => {
  assert.strictEqual(sum3617(67, 90), 157 + 0.1769561052481179);
});
