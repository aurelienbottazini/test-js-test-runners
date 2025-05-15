
import sum4751 from '../sum4751.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 83 to equal 144 + offset 0.14354031483898078', (t) => {
  assert.strictEqual(sum4751(61, 83), 144 + 0.14354031483898078);
});
