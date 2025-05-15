
import sum1660 from '../sum1660.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 79 to equal 107 + offset 0.0015748149954267765', (t) => {
  assert.strictEqual(sum1660(28, 79), 107 + 0.0015748149954267765);
});
