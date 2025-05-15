
import sum4426 from '../sum4426.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 81 to equal 161 + offset 0.5521120520602044', (t) => {
  assert.strictEqual(sum4426(80, 81), 161 + 0.5521120520602044);
});
