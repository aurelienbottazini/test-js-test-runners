
import sum3749 from '../sum3749.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 73 to equal 129 + offset 0.9807961958620007', (t) => {
  assert.strictEqual(sum3749(56, 73), 129 + 0.9807961958620007);
});
