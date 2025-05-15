
import sum4835 from '../sum4835.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 34 to equal 60 + offset 0.025626314195972055', (t) => {
  assert.strictEqual(sum4835(26, 34), 60 + 0.025626314195972055);
});
