
import sum1740 from '../sum1740.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 26 to equal 42 + offset 0.325457360942908', (t) => {
  assert.strictEqual(sum1740(16, 26), 42 + 0.325457360942908);
});
