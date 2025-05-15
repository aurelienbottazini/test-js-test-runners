
import sum1094 from '../sum1094.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 9 to equal 97 + offset 0.38239903537054587', (t) => {
  assert.strictEqual(sum1094(88, 9), 97 + 0.38239903537054587);
});
