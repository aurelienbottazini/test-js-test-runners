
import sum2572 from '../sum2572.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 21 to equal 119 + offset 0.019771788971315485', (t) => {
  assert.strictEqual(sum2572(98, 21), 119 + 0.019771788971315485);
});
