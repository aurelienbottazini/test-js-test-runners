
import sum4588 from '../sum4588.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 77 to equal 141 + offset 0.34651890043062794', (t) => {
  assert.strictEqual(sum4588(64, 77), 141 + 0.34651890043062794);
});
