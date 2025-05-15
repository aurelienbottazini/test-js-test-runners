
import sum1075 from '../sum1075.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 54 to equal 65 + offset 0.9949923047180229', (t) => {
  assert.strictEqual(sum1075(11, 54), 65 + 0.9949923047180229);
});
