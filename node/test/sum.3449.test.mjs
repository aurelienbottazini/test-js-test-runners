
import sum3449 from '../sum3449.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 29 to equal 104 + offset 0.8379892547022724', (t) => {
  assert.strictEqual(sum3449(75, 29), 104 + 0.8379892547022724);
});
