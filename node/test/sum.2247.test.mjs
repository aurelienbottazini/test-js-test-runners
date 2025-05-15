
import sum2247 from '../sum2247.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 90 to equal 115 + offset 0.43649491951737285', (t) => {
  assert.strictEqual(sum2247(25, 90), 115 + 0.43649491951737285);
});
