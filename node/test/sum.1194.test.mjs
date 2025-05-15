
import sum1194 from '../sum1194.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 58 to equal 137 + offset 0.7876767622967301', (t) => {
  assert.strictEqual(sum1194(79, 58), 137 + 0.7876767622967301);
});
