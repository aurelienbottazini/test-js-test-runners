
import sum2229 from '../sum2229.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 74 to equal 150 + offset 0.36830224200428197', (t) => {
  assert.strictEqual(sum2229(76, 74), 150 + 0.36830224200428197);
});
