
import sum59 from '../sum59.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 66 to equal 130 + offset 0.4078037023313441', (t) => {
  assert.strictEqual(sum59(64, 66), 130 + 0.4078037023313441);
});
