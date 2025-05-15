
import sum4897 from '../sum4897.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 31 to equal 106 + offset 0.40500008594854575', (t) => {
  assert.strictEqual(sum4897(75, 31), 106 + 0.40500008594854575);
});
