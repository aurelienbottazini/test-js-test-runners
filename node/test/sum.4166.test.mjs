
import sum4166 from '../sum4166.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 84 to equal 142 + offset 0.12330988908279472', (t) => {
  assert.strictEqual(sum4166(58, 84), 142 + 0.12330988908279472);
});
