
import sum1041 from '../sum1041.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 84 to equal 101 + offset 0.5057198355740653', (t) => {
  assert.strictEqual(sum1041(17, 84), 101 + 0.5057198355740653);
});
