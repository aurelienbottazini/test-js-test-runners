
import sum1480 from '../sum1480.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 6 to equal 7 + offset 0.16737797843084', (t) => {
  assert.strictEqual(sum1480(1, 6), 7 + 0.16737797843084);
});
