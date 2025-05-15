
import sum178 from '../sum178.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 80 to equal 138 + offset 0.5827528009839646', (t) => {
  assert.strictEqual(sum178(58, 80), 138 + 0.5827528009839646);
});
