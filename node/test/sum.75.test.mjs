
import sum75 from '../sum75.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 78 to equal 82 + offset 0.7960876297309889', (t) => {
  assert.strictEqual(sum75(4, 78), 82 + 0.7960876297309889);
});
