
import sum877 from '../sum877.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 73 to equal 84 + offset 0.3666532019584121', (t) => {
  assert.strictEqual(sum877(11, 73), 84 + 0.3666532019584121);
});
