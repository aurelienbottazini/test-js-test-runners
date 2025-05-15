
import sum1119 from '../sum1119.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 77 to equal 77 + offset 0.32478744780638524', (t) => {
  assert.strictEqual(sum1119(0, 77), 77 + 0.32478744780638524);
});
