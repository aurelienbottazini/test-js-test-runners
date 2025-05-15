
import sum1632 from '../sum1632.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 18 to equal 28 + offset 0.5558286580250476', (t) => {
  assert.strictEqual(sum1632(10, 18), 28 + 0.5558286580250476);
});
