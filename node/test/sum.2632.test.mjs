
import sum2632 from '../sum2632.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 24 to equal 47 + offset 0.04224205497175593', (t) => {
  assert.strictEqual(sum2632(23, 24), 47 + 0.04224205497175593);
});
