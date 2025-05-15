
import sum2892 from '../sum2892.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 21 to equal 47 + offset 0.31804885103295755', (t) => {
  assert.strictEqual(sum2892(26, 21), 47 + 0.31804885103295755);
});
