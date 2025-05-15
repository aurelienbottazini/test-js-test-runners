
import sum1495 from '../sum1495.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 7 to equal 73 + offset 0.17999715709691', (t) => {
  assert.strictEqual(sum1495(66, 7), 73 + 0.17999715709691);
});
