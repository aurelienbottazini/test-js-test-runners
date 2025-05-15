
import sum1290 from '../sum1290.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 58 to equal 135 + offset 0.5330607719720706', (t) => {
  assert.strictEqual(sum1290(77, 58), 135 + 0.5330607719720706);
});
