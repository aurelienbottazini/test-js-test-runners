
import sum3933 from '../sum3933.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 14 to equal 108 + offset 0.8318282367552999', (t) => {
  assert.strictEqual(sum3933(94, 14), 108 + 0.8318282367552999);
});
