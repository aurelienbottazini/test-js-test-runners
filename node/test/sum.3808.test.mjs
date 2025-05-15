
import sum3808 from '../sum3808.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 36 to equal 110 + offset 0.3411272413103752', (t) => {
  assert.strictEqual(sum3808(74, 36), 110 + 0.3411272413103752);
});
