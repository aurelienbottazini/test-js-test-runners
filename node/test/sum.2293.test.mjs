
import sum2293 from '../sum2293.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 19 to equal 73 + offset 0.9878162468128098', (t) => {
  assert.strictEqual(sum2293(54, 19), 73 + 0.9878162468128098);
});
