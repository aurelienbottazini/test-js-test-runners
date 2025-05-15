
import sum428 from '../sum428.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 14 to equal 39 + offset 0.8858194984136784', (t) => {
  assert.strictEqual(sum428(25, 14), 39 + 0.8858194984136784);
});
