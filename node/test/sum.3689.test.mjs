
import sum3689 from '../sum3689.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 24 to equal 119 + offset 0.28791278850980706', (t) => {
  assert.strictEqual(sum3689(95, 24), 119 + 0.28791278850980706);
});
