
import sum4591 from '../sum4591.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 9 to equal 66 + offset 0.7275197735809793', (t) => {
  assert.strictEqual(sum4591(57, 9), 66 + 0.7275197735809793);
});
