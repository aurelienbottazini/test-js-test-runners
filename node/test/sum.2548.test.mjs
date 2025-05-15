
import sum2548 from '../sum2548.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 46 to equal 81 + offset 0.20488644813004642', (t) => {
  assert.strictEqual(sum2548(35, 46), 81 + 0.20488644813004642);
});
