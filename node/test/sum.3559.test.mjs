
import sum3559 from '../sum3559.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 76 to equal 118 + offset 0.6597083813687871', (t) => {
  assert.strictEqual(sum3559(42, 76), 118 + 0.6597083813687871);
});
