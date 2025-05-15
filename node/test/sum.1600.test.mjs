
import sum1600 from '../sum1600.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 69 to equal 159 + offset 0.40067162408832324', (t) => {
  assert.strictEqual(sum1600(90, 69), 159 + 0.40067162408832324);
});
