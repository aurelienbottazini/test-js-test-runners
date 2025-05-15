
import sum1722 from '../sum1722.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 63 to equal 140 + offset 0.1638334159781325', (t) => {
  assert.strictEqual(sum1722(77, 63), 140 + 0.1638334159781325);
});
