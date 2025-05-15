
import sum1732 from '../sum1732.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 53 to equal 110 + offset 0.6100961595795147', (t) => {
  assert.strictEqual(sum1732(57, 53), 110 + 0.6100961595795147);
});
