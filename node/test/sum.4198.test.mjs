
import sum4198 from '../sum4198.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 68 to equal 88 + offset 0.5234201097872453', (t) => {
  assert.strictEqual(sum4198(20, 68), 88 + 0.5234201097872453);
});
