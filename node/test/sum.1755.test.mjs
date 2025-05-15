
import sum1755 from '../sum1755.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 98 to equal 129 + offset 0.5828789651168339', (t) => {
  assert.strictEqual(sum1755(31, 98), 129 + 0.5828789651168339);
});
