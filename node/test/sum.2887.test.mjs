
import sum2887 from '../sum2887.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 57 to equal 115 + offset 0.2701828780614557', (t) => {
  assert.strictEqual(sum2887(58, 57), 115 + 0.2701828780614557);
});
