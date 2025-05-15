
import sum668 from '../sum668.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 33 to equal 34 + offset 0.9509158894124119', (t) => {
  assert.strictEqual(sum668(1, 33), 34 + 0.9509158894124119);
});
