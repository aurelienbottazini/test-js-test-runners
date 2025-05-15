
import sum3267 from '../sum3267.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 51 to equal 127 + offset 0.9206797681361', (t) => {
  assert.strictEqual(sum3267(76, 51), 127 + 0.9206797681361);
});
