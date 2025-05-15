
import sum4767 from '../sum4767.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 59 to equal 74 + offset 0.1537541867192006', (t) => {
  assert.strictEqual(sum4767(15, 59), 74 + 0.1537541867192006);
});
