
import sum3168 from '../sum3168.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 26 to equal 96 + offset 0.7413179041810319', (t) => {
  assert.strictEqual(sum3168(70, 26), 96 + 0.7413179041810319);
});
