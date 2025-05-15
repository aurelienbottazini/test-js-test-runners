
import sum1823 from '../sum1823.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 12 to equal 54 + offset 0.6734093270676731', (t) => {
  assert.strictEqual(sum1823(42, 12), 54 + 0.6734093270676731);
});
