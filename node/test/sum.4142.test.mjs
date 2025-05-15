
import sum4142 from '../sum4142.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 6 to equal 29 + offset 0.5870645928518264', (t) => {
  assert.strictEqual(sum4142(23, 6), 29 + 0.5870645928518264);
});
