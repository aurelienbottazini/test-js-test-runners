
import sum634 from '../sum634.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 24 to equal 35 + offset 0.010665074638339878', (t) => {
  assert.strictEqual(sum634(11, 24), 35 + 0.010665074638339878);
});
