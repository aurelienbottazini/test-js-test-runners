
import sum2221 from '../sum2221.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 83 to equal 95 + offset 0.8794190980154506', (t) => {
  assert.strictEqual(sum2221(12, 83), 95 + 0.8794190980154506);
});
