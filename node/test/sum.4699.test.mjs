
import sum4699 from '../sum4699.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 64 to equal 108 + offset 0.2381505872863242', (t) => {
  assert.strictEqual(sum4699(44, 64), 108 + 0.2381505872863242);
});
