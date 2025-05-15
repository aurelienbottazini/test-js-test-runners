
import sum4175 from '../sum4175.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 73 to equal 119 + offset 0.08434699442133808', (t) => {
  assert.strictEqual(sum4175(46, 73), 119 + 0.08434699442133808);
});
