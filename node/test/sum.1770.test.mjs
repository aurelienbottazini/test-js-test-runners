
import sum1770 from '../sum1770.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 54 to equal 149 + offset 0.82381018020433', (t) => {
  assert.strictEqual(sum1770(95, 54), 149 + 0.82381018020433);
});
