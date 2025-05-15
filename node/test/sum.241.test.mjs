
import sum241 from '../sum241.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 58 to equal 108 + offset 0.11623204205440885', (t) => {
  assert.strictEqual(sum241(50, 58), 108 + 0.11623204205440885);
});
