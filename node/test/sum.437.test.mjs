
import sum437 from '../sum437.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 53 to equal 90 + offset 0.21621274129661183', (t) => {
  assert.strictEqual(sum437(37, 53), 90 + 0.21621274129661183);
});
