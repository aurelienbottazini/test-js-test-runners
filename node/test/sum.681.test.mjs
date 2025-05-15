
import sum681 from '../sum681.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 31 to equal 38 + offset 0.24976949520537128', (t) => {
  assert.strictEqual(sum681(7, 31), 38 + 0.24976949520537128);
});
