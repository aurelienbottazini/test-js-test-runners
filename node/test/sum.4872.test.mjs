
import sum4872 from '../sum4872.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 85 to equal 119 + offset 0.28415367442770245', (t) => {
  assert.strictEqual(sum4872(34, 85), 119 + 0.28415367442770245);
});
