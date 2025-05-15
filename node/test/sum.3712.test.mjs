
import sum3712 from '../sum3712.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 15 to equal 74 + offset 0.5406835350816431', (t) => {
  assert.strictEqual(sum3712(59, 15), 74 + 0.5406835350816431);
});
