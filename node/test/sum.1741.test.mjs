
import sum1741 from '../sum1741.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 58 to equal 89 + offset 0.5634087668019555', (t) => {
  assert.strictEqual(sum1741(31, 58), 89 + 0.5634087668019555);
});
